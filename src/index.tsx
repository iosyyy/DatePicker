import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"
import {Provider} from "react-redux"
import * as serviceWorker from './serviceWorker';
import {DatePicker, Input} from "antd";
import moment from 'moment';
import 'antd/dist/antd.min.css'

var lists: { name: any; conBegin: any; conEnd: any; }[] = []
const CreateRedoucer =
    function (state = {type: "mouthChange"}, action: any) {
        if (action.type === 'int') {
            lists.push({name: action.payload.name, conBegin: action.payload.conBegin, conEnd: action.payload.conEnd})
            return {...state, payload: {mouth: mouth, list: lists}}
        } else {
            return {...state,payload: {mouth: mouth,list: lists}}
        }
    }
const disabledDate = (current: any) => {
    if (!current) {
        return false
    } else {
        // 前一天后日期不可选
        return (current > moment("2020-12-31") || current < moment("2020-01-01"))
    }
}
const store = createStore(CreateRedoucer);
var mouth = 1;
let conBegin = moment();
let conEnd = moment();
let name = '';
store.dispatch({
    type:'init',
    mouth:1
})
class Linkx extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = ({name: '', momentBegin: moment("2020-01-01"), momentEnd: moment("2020-01-01")})
        this.handleOnclick = this.handleOnclick.bind(this)
        this.handleBeginChange = this.handleBeginChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleOnclick(e: any) {
        // @ts-ignore
        conBegin = this.state.momentBegin
        // @ts-ignore
        conEnd = this.state.momentEnd
        // @ts-ignore
        name = this.state.name
        store.dispatch({
            type: "int",
            payload: {name: name, mouth: mouth, list: lists, conBegin: conBegin, conEnd: conEnd}
        });
        this.setState({name: '', momentBegin: moment("2020-01-01"), momentEnd: moment("2020-01-01")})
    }

    handleBeginChange(e: any) {
        // @ts-ignore
        let conBegin = e
        // @ts-ignore
        let conEnd = this.state.momentEnd
        if (conBegin.toArray()[1] > conEnd.toArray()[1]) {
            let w = conBegin;
            conBegin = conEnd;
            conEnd = w;
        } else if (conBegin.toArray()[1] === conEnd.toArray()[1]) {
            if (conBegin.toArray()[2] > conEnd.toArray()[2]) {
                let w = conBegin;
                conBegin = conEnd;
                conEnd = w;
            }
        }
        this.setState({momentBegin: conBegin, momentEnd: conEnd})
    }

    handleEndChange(e: any) {
        // @ts-ignore
        let conBegin = this.state.momentBegin
        // @ts-ignore
        let conEnd = e
        if (conBegin.toArray()[1] > conEnd.toArray()[1]) {
            let w = conBegin;
            conBegin = conEnd;
            conEnd = w;
        } else if (conBegin.toArray()[1] === conEnd.toArray()[1]) {
            if (conBegin.toArray()[2] > conEnd.toArray()[2]) {
                let w = conBegin;
                conBegin = conEnd;
                conEnd = w;
            }
        }
        this.setState({momentBegin: conBegin, momentEnd: conEnd})
    }

    handleChangeName(e: any) {
        this.setState({name: e.target.value})
    }

    render() {
        // @ts-ignore
        let momentBegin = this.state.momentBegin
        // @ts-ignore
        let momentEnd = this.state.momentEnd
        // @ts-ignore
        let name = this.state.name
        return (
            (<form>
                <label>开始时间:</label>
                <DatePicker value={momentBegin} onChange={this.handleBeginChange} disabledDate={disabledDate}
                            defaultValue={moment("2020-01-01")}/>&nbsp;&nbsp;

                <label>结束时间:</label>
                <DatePicker value={momentEnd} onChange={this.handleEndChange} disabledDate={disabledDate}
                            defaultValue={moment("2020-01-01")}/>
                <br/>
                <label>事件名称:</label>

                <Input value={name}
                       style={{width: '150px'}} onChange={this.handleChangeName}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleOnclick} type="submit">提交</button>
            </form>)
        );
    }
}

const {MonthPicker} = DatePicker;
store.subscribe(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
            <Linkx/>
        </Provider>,
        document.getElementById('root')
    );
})
ReactDOM.render(
    <Provider store={store}>
        <App/>
        <Linkx/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
