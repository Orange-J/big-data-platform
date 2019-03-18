import React, { Component } from 'react';
import { Form, message } from 'antd';
import ServerTable from './ServerTable';
import styles from './index.module.scss';

class BaseConfig extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.beforeShow = this.beforeShow.bind(this);
        this.beforeSwitchToPrev = this.beforeSwitchToPrev.bind(this);
        this.beforeSwitchToNext = this.beforeSwitchToNext.bind(this);
    }

    beforeShow () {

    }

    beforeSwitchToPrev () {
        this.props.onReadyToPrev();
    }

    beforeSwitchToNext () {
        this.props.onReadyToNext();
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
        const serverTableItemLayout = {
            labelCol: {
                span: 3
            },
            wrapperCol: {
                span: 21
            }
        };

        return (
            <div className={styles.BaseConfigWrap}>
                <Form>
                    <Form.Item label="服务器节点配置" {...serverTableItemLayout}>
                        <ServerTable />
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

BaseConfig = Form.create({name: 'base_config_form'})(BaseConfig);

export default BaseConfig;
