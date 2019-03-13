import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import CreateCluster from './CreateClusterForm';
import BaseConfig from './BaseConfig';
import styles from './index.module.scss';

const steps = [
    '创建集群',
    '配置服务节点',
    '选择组件模板',
    'BD组件安装',
    '组件参数配置',
    '部署安装'
];
const minStepIndex = 1;
const maxStepIndex = steps.length;

class ClusterDeploy extends Component {

    constructor (props) {
        super(props);

        this.state = {
            curStep: minStepIndex
        };

        this._createRefs = this._createRefs.bind(this);
        this._onPrevClick = this._onPrevClick.bind(this);
        this._onNextClick = this._onNextClick.bind(this);
        this._onFinishClick = this._onFinishClick.bind(this);
        this.onReadyToPrev = this.onReadyToPrev.bind(this);
        this.onReadyToNext = this.onReadyToNext.bind(this);

        this._createRefs();
    }

    _createRefs () {
        this.ref_1 = React.createRef();
        this.ref_2 = React.createRef();
        // this.ref_3 = React.createRef();
        // this.ref_4 = React.createRef();
        // this.ref_5 = React.createRef();
    }

    _onPrevClick () {
        this._getActiveRef().beforeSwitchToPrev();
    }

    _onNextClick () {
        this._getActiveRef().beforeSwitchToNext();
    }

    _onFinishClick () {
        message.success('操作成功');
    }

    _switchTo (dir) {
        const hash = {
            next: 1,
            prev: -1
        };
        this.setState({
            curStep: this.state.curStep + hash[dir]
        });
    }

    _getActiveRef () {
        return this[`ref_${this.state.curStep}`].current;
    }

    _getPrevRef () {
        let curStep = this.state.curStep;
        return curStep === minStepIndex ? null : this[`ref_${curStep - 1}`].current;
    }

    _getNextRef () {
        let curStep = this.state.curStep;
        return curStep === maxStepIndex ? null : this[`ref_${curStep + 1}`].current;
    }

    onReadyToPrev () {
        let ref = this._getPrevRef();
        if (ref) {
            ref.beforeShow('prev');
        }
        this._switchTo('prev');
    }

    onReadyToNext () {
        let ref = this._getNextRef();
        if (ref) {
            ref.beforeShow('next');
        }
        this._switchTo('next');
    }

    render () {
        return (
            <div className={styles.ClusterDeploy}>
                <div className={styles.topBox}>
                    <div className={styles.title}>BigData平台部署安装</div>
                    <div className={styles.stepBox}>
                        <Steps labelPlacement="vertical" current={this.state.curStep - 1}>
                            {
                                steps.map(item => <Steps.Step title={item} key={item}/>)
                            }
                        </Steps>
                    </div>
                </div>
                <div className={styles.mainBox}>
                    {
                        this.state.curStep === minStepIndex && (<div className={styles.itemBox}>
                            <CreateCluster
                                ref={this.ref_1}
                                onReadyToPrev={this.onReadyToPrev}
                                onReadyToNext={this.onReadyToNext}
                            />
                        </div>)
                    }
                    {
                        this.state.curStep === 2 && (<div className={styles.itemBox}>
                            <BaseConfig
                                ref={this.ref_2}
                                onReadyToPrev={this.onReadyToPrev}
                                onReadyToNext={this.onReadyToNext}
                            />
                        </div>)
                    }
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.buttonBox}>
                        {
                            this.state.curStep !== minStepIndex &&
                                <Button style={{float: 'left'}} type="primary" onClick={this._onPrevClick}>上一步</Button>
                        }
                        {
                            this.state.curStep < maxStepIndex ?
                                <Button style={{float: 'right'}} type="primary" onClick={this._onNextClick}>下一步</Button> :
                                <Button style={{float: 'right'}} type="primary" onClick={this._onFinishClick}>完成</Button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ClusterDeploy;
