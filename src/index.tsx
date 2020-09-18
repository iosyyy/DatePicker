import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
import {Input,DatePicker} from "antd";
import moment from 'moment';
import 'antd/dist/antd.min.css'
var lists=[{name:'',selectId:-1,mouth:0}]
const CreateRedoucer =
    function (state = {type: "mouthChange"}, action:any)  {
        mouth=action.payload
        for(var i=0;i<49;i++)
            lists[i]={name:'',selectId:-1,mouth: 0}
        if(action.type==='int')
        {
            console.log(action)
            return {...state, payload: {mouth:mouth,list:lists,conBegin:action.conBegin,conEnd:action.conEnd}}
        }
        else{
            return {...state}
        }
}
const disabledDate = (current: any) => {
    if (!current) {
        return false
    } else {
        // 前一天后日期不可选
        return (current > moment("2020-12-31")||current<moment("2020-01-01"))
    }
}
const store = createStore(CreateRedoucer);
var mouth=1;
store.dispatch({
    type:"int",
    payload:{mouth:mouth,list:lists,conBegin:moment(),conEnd:moment()}});
let conBegin=moment();
let conEnd=moment();

class Linkx extends React.Component{
    constructor(props:any) {
        super(props);
        this.state=({momentBegin:moment(),momentEnd:moment()})
        this.handleOnclick=this.handleOnclick.bind(this)
        this.handleBeginChange=this.handleBeginChange.bind(this);
        this.handleEndChange=this.handleEndChange.bind(this);
    }

    handleOnclick(e:any)
    {
        store.dispatch({
            type:"int",
            payload:{mouth:mouth,list:lists,conBegin:conEnd,conEnd:conEnd}});
    }

    handleBeginChange(e:any)
    {
        conBegin=e;
    }
    handleEndChange(e:any)
    {
        conEnd=e;
    }
    render() {
        // @ts-ignore
        let momentBegin=this.state.momentBegin
        // @ts-ignore
        let momentEnd=this.state.momentEnd
        return (
            (<form>
                <label >开始时间:</label>
                <DatePicker onChange={this.handleBeginChange} disabledDate={disabledDate} defaultValue={moment("2020-01-01")}/>
                <label >结束时间:</label>
                <DatePicker  onChange={this.handleEndChange} disabledDate={disabledDate} defaultValue={moment("2020-01-01")}/>
                <br/>
                <button onClick={this.handleOnclick} type="submit">提交</button>
            </form>)
        );
    }
}
const { MonthPicker } = DatePicker;
store.subscribe(()=>{ReactDOM.render(
    <Provider store={store}>
            <App />
        <Linkx/>
    </Provider>,
    document.getElementById('root')
);})
ReactDOM.render(
<Provider store={store}>
    <App />
    <Linkx/>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
