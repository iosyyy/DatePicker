import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
const CreateRedoucer =
    function (state = {type: "mouthChange"}, action:any)  {
        console.log(action)
        mouth=action.mouth
    return {...state, payload: action.payload}
    }
const store = createStore(CreateRedoucer);
var mouth=1;
store.dispatch({
    type:"int",
    payload:mouth});
ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
