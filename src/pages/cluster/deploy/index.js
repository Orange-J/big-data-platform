import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import styles from './index.module.scss';

const steps = [
    '基本信息',
    '选择组件模板',
    'BD组件安装',
    '组件参数配置',
    '部署安装'
];

class ClusterDeploy extends Component {

    constructor (props) {
        super(props);
        this.state = {
            curStep: 0
        };

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.finish = this.finish.bind(this);
    }

    prev () {
        this.setState({
            curStep: this.state.curStep - 1
        });
    }

    next () {
        this.setState({
            curStep: this.state.curStep + 1
        });
    }

    finish () {
        message.success('操作成功');
    }

    render () {
        return (
            <div className={styles.ClusterDeploy}>
                <div className={styles.topBox}>
                    <div className={styles.title}>BigData平台部署安装</div>
                    <div className={styles.stepBox}>
                        <Steps labelPlacement="vertical" current={this.state.curStep}>
                            {
                                steps.map(item => <Steps.Step title={item} key={item}/>)
                            }
                        </Steps>
                    </div>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.itemBox}></div>
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.buttonBox}>
                        {
                            this.state.curStep !== 0 &&
                                <Button style={{float: 'left'}} type="primary" onClick={this.prev}>上一步</Button>
                        }
                        {
                            this.state.curStep < steps.length - 1 ?
                                <Button style={{float: 'right'}} type="primary" onClick={this.next}>下一步</Button> :
                                <Button style={{float: 'right'}} type="primary" onClick={this.finish}>完成</Button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ClusterDeploy;
