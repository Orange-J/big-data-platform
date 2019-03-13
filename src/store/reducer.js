import { SET_DEPLOYING_CLUSTER_ID } from './actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_DEPLOYING_CLUSTER_ID:
            return { ...state, deployingClusterId: action.payload.id };
        default:
            return state;
    }
};
