import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import store from 'src/store';
import { updateDeployingClusterId } from 'src/store/actions';
import styles from './index.module.scss';
import './mock';

class CreateClusterForm extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this._ajaxSubmit = this._ajaxSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

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
        const tailFormItemLayout = {
            wrapperCol: {
                span: 4,
                offset: 6
            }
        };

        const MAX_LEN = 16;

        return (
            <Form onSubmit={this.handleSubmit} hideRequiredMark={false}>
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
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>保存</Button>
                </Form.Item>
            </Form>
        );
    }
}

CreateClusterForm = Form.create({name: 'create_cluster_form'})(CreateClusterForm);

// TODO: 后续应将此类和上面的类拆分到两个文件
export default class CreateCluster extends Component {

    beforeSwitchToPrev () {
        this.props.onReadyToPrev();
    }

    beforeSwitchToNext () {
        this.props.onReadyToNext();
    }

    beforeShow () {

    }

    render () {
        return (
            <div className={styles['page-cluster-deploy__CreateClusterWrap']}>
                <CreateClusterForm />
            </div>
        );
    }
};
