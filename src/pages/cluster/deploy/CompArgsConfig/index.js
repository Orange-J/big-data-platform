import React, { Component } from 'react';

class CompArgsConfig extends Component {

    constructor (props) {
        super(props);

        this.beforeShow = this.beforeShow.bind(this);
        this.beforeSwitchToPrev = this.beforeSwitchToPrev.bind(this);
        this.beforeSwitchToNext = this.beforeSwitchToNext.bind(this);
    }

    beforeShow () {

        // TODO: 获取模板数据
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
                组件参数配置页
            </div>
        );
    }
};

export default CompArgsConfig;
