import React, { Component } from 'react';

class Setup extends Component {

    constructor (props) {
        super(props);

        this.beforeShow = this.beforeShow.bind(this);
        this.beforeSwitchToPrev = this.beforeSwitchToPrev.bind(this);
        this.beforeSwitchToNext = this.beforeSwitchToNext.bind(this);
    }

    beforeShow () {

        // TODO: 创建定时请求任务，获取安装进度
    }

    beforeSwitchToPrev () {
        this.props.onReadyToPrev();
    }

    beforeSwitchToNext () {
        this.props.onReadyToNext();
    }

    render () {
        return (
            <div>
                安装页面
            </div>
        );
    }
};

export default Setup;
