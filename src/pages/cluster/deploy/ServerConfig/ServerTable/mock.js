import Mock from 'mockjs';

Mock.mock('/mock/server-node', 'get', function () {
    return {
        success: true,
        data: [
            {
                key: '1',
                name: '节点1',
                ip_pub: '1.1.1.1',
                ip_pri: '2.2.2.2',
                username: 'admin',
                password: '123'
            }
        ]
    };
});
