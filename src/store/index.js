import { createStore } from 'redux';
import reducer from './reducer';

const initState = {
    deployingClusterId: null
};
const store = createStore(reducer, initState);

export default store;
