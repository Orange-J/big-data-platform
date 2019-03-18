import React, { Component } from 'react';
import { message } from 'antd';
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
        return (
            <div className={styles.BaseConfigWrap}>
                <ServerTable />
            </div>
        );
    }
}

export default BaseConfig;
