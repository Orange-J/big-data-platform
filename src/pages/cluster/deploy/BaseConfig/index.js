import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import styles from './index.module.scss';

class BaseConfig extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit () {
        // TODO: 提交数据
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

        return (
            <div className={styles.BaseConfigWrap}>
                <Form onSubmit={this.handleSubmit} hideRequiredMark={true}>
                    <Form.Item label="集群名称" {...inputItemLayout}>
                        {
                            getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入集群名称' }]
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="描述" {...inputItemLayout}>
                        {
                            getFieldDecorator('desc', {
                                rules: [{ required: true, message: '请输入描述' }]
                            })(
                                <Input />
                            )
                        }
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

BaseConfig = Form.create({name: 'base_config_form'})(BaseConfig);

export default BaseConfig;
