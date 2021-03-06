import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import index from './reducer/index';

const store = createStore( index, composeWithDevTools());

export default store;