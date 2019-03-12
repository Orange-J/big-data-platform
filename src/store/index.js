import { createStore } from 'redux';

const reducer = function (state = {}, action) {
    switch (action.type) {
        case 'SET_CUR_CLUSTER_ID':
            return { ...state, clusterId: action.id };
        default:
            return state;
    }
};

const initState = {
    clusterId: null
};
const store = createStore(reducer, initState);

export default store;
