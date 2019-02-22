import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header'
import ClusterDeploy from './pages/cluster/deploy'

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <div className={styles.headerBox}>
                    <Header />
                </div>
                <div className={styles.bodyBox}>
                    <div className={styles.navBox}>TODO: left-tree</div>
                    <div className={styles.viewBox}>
                        <ClusterDeploy />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
