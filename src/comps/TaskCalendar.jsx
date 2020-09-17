import React from "react";
import ReactDOM from 'react-dom'
import {HashRouter, Route, Link} from "react-router-dom";
import Dates from "./Dates";
import '../css/type.css'
import {connect, Provider} from "react-redux"

class TaskCalendar extends React.Component
{
    constructor(props) {
        super(props);
        // this.state={mouth:props.mouth}
        this.state={mouth:this.props.payload}
        this.handleClickUp=this.handleClickUp.bind(this)
        this.handleClickDown=this.handleClickDown.bind(this)
    }
    handleClickUp()
    {
        this.setState({mouth:this.state.mouth+1})
    }
    handleClickDown(mouth)
    {
        this.setState({mouth:this.state.mouth-1})
    }
    render() {
        const mouth = '/mouth'+'/'+this.state.mouth
        return (
            <HashRouter basename="/TaskCalendar">
                <Link to={mouth} onClick={this.handleClickDown} className="arrowreverse" />
                &nbsp;&nbsp;&nbsp;
                <Link to={mouth} onClick={this.handleClickUp} className="arrow" />
                <Route path="/mouth/:mouth" component={Dates}/>
            </HashRouter>
        );
    }
}

export default connect((state)=>{return state})(TaskCalendar)
