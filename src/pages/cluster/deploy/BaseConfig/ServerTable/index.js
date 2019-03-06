import React, { Component } from 'react';
import { Table, Divider, Button, Icon } from 'antd';
import styles from './index.module.scss';


const data = [
    {
        key: '1',
        name: '节点1',
        ip_pub: '1.1.1.1',
        ip_pri: '2.2.2.2',
        username: 'admin',
        password: '123'
    }
];

class ServerTable extends Component {

    constructor (props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit () {
        // TODO: 编辑功能
    }

    handleDelete () {
        // TODO: 删除功能
    }

    render () {
        const columns = [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '外网IP',
                dataIndex: 'ip_pub'
            },
            {
                title: '内网IP',
                dataIndex: 'ip_pri'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '密码',
                dataIndex: 'password'
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <button className={styles.tableButton} onClick={() => this.handleEdit(record)}>编辑</button>
                        <Divider type="vertical" />
                        <button className={styles.tableButton} onClick={() => this.handleDelete(record)}>删除</button>
                    </span>
                )
            }
        ];

        return (
            <div className={styles['cluster-deploy__ServerTableWrap']}>
                <div className={styles.tbar}>
                    <Button type="primary">
                        <Icon type="plus" />新增
                    </Button>
                    <Button type="primary">
                        <Icon type="delete" />删除
                    </Button>
                </div>
                <div className={styles.tableBox}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered={true}
                        rowSelection={{}}
                    />
                </div>
            </div>
        );
    }
}

export default ServerTable;
