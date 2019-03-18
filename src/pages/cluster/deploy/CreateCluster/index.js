import React, { Component } from 'react';
import ClusterForm from './ClusterForm';
import styles from './index.module.scss';
import './mock';

class CreateCluster extends Component {

    constructor (props) {
        super(props);

        this._createRef = this._createRef.bind(this);
        this.beforeShow = this.beforeShow.bind(this);
        this.beforeSwitchToPrev = this.beforeSwitchToPrev.bind(this);
        this.beforeSwitchToNext = this.beforeSwitchToNext.bind(this);
        this.onReadyToNext = this.onReadyToNext.bind(this);

        this._createRef();
    }

    beforeShow () {

    }

    beforeSwitchToPrev () {
        // this.props.onReadyToPrev();
    }

    beforeSwitchToNext () {
        this.formRef.submitData();
    }

    onReadyToNext () {
        this.props.onReadyToNext();
    }

    _createRef (formRef) {
        this.formRef = formRef;
    }

    render () {
        return (
            <div className={styles['page-cluster-deploy__CreateClusterWrap']}>
                <ClusterForm
                    wrappedComponentRef={this._createRef}
                    onReadyToNext={this.onReadyToNext}
                />
            </div>
        );
    }
};

export default CreateCluster;
