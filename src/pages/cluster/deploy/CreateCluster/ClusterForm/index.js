import React, { Component } from 'react';
import { Form, Input, message } from 'antd';
import axios from 'axios';
import store from 'src/store';
import { updateDeployingClusterId } from 'src/store/actions';

class CreateClusterForm extends Component {

    constructor (props) {
        super(props);

        this.submitData = this.submitData.bind(this);
        this._ajaxSubmit = this._ajaxSubmit.bind(this);
    }

    submitData () {
        let me = this;
        this.props.form.validateFields((err) => {
            if (!err) {
                me._ajaxSubmit();
            }
        });
    }

    async _ajaxSubmit () {
        let json = (await axios.post('/mock/create-cluster', {
            data: this.props.form.getFieldsValue()
        })).data;

        if (!json.success) {
            message.error('操作失败');
            return;
        }

        // 将正在部署的集群id存入redux
        store.dispatch(updateDeployingClusterId(json.cluster_id));
        message.success('操作成功');
        this.props.onReadyToNext();
    }

    render () {
        const { getFieldDecorator } = this.props.form;
        const inputItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 18
            }
        };

        const MAX_LEN = 16;

        return (
            <Form hideRequiredMark={false}>
                <Form.Item label="集群名称" {...inputItemLayout}>
                    {
                        getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '请输入集群名称' },
                                { max: MAX_LEN, message: `集群名称不可超过${MAX_LEN}字符` }
                            ]
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label="描述" {...inputItemLayout}>
                    {
                        getFieldDecorator('desc', {
                            rules: [{ max: MAX_LEN, message: `描述不可超过${MAX_LEN}字符` }]
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
            </Form>
        );
    }
}

let WrappedCreateClusterForm = Form.create({name: 'create_cluster_form'})(CreateClusterForm);

export default WrappedCreateClusterForm;
