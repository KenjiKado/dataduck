import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

sagaMiddleware.run(rootSaga);
registerServiceWorker();
