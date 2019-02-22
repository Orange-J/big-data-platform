import React, { Component } from 'react';
import { Steps, Button } from 'antd';
import styles from './index.module.scss';

const steps = [
    '基本信息',
    '选择组件模板',
    'BD组件安装',
    '组件参数配置',
    '部署安装'
];

class ClusterDeploy extends Component {
    render () {
        return (
            <div className={styles.ClusterDeploy}>
                <div className={styles.topBox}>
                    <div className={styles.title}>BigData平台部署安装</div>
                    <div className={styles.stepBox}>
                        <Steps labelPlacement="vertical">
                            {
                                steps.map(item => <Steps.Step title={item} key={item}/>)
                            }
                        </Steps>
                    </div>
                </div>
                <div className={styles.mainBox}></div>
                <div className={styles.bottomBox}>
                    <div className={styles.buttonBox}>
                        <Button style={{float: 'left'}} type="primary">上一步</Button>
                        <Button style={{float: 'right'}} type="primary">下一步</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClusterDeploy;
