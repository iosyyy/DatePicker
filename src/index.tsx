import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
var lists=[{name:'',selectId:-1,mouth:0}]
const CreateRedoucer =
    function (state = {type: "mouthChange"}, action:any)  {
        mouth=action.payload
        for(var i=0;i<49;i++)
            lists[i]={name:'',selectId:-1,mouth: 0}

    return {...state, payload: {mouth:mouth,list:lists}}
}
const store = createStore(CreateRedoucer);
var mouth=1;
store.dispatch({
    type:"int",
    payload:{mouth:mouth,list:lists}});
store.subscribe(()=>{ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root')
);})
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
