import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import styles from './index.module.scss';

class BaseConfig extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                message.success('保存成功');
            }
        });
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
                offset: 20
            }
        };
        const MAX_LEN = 16;

        return (
            <div className={styles.BaseConfigWrap}>
                <Form onSubmit={this.handleSubmit} hideRequiredMark={true}>
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
                                rules: [{ max: 16, message: `描述不可超过${MAX_LEN}字符` }]
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>保存</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

BaseConfig = Form.create({name: 'base_config_form'})(BaseConfig);

export default BaseConfig;
