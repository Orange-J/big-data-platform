import Mock from 'mockjs';

Mock.mock('/mock/create-cluster', 'post', function () {
    return {
        success: true,
        cluster_id: 0
    };
});
