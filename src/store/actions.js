import { SET_DEPLOYING_CLUSTER_ID } from './actionTypes';

export function updateDeployingClusterId(id) {
    return {
        type: SET_DEPLOYING_CLUSTER_ID,
        payload: {
            id
        }
    };
}
