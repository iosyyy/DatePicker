import React from "react";
import {HashRouter, Link, Route} from "react-router-dom";
import Dates from "./Dates";
import '../css/type.css'
import {connect} from "react-redux"

var mou;

class TaskCalendar extends React.Component {
    constructor(props) {
        super(props);
        // this.state={mouth:props.mouth}
        this.state = {mouth: this.props.payload.mouth.mouth}
        mou = this.props.payload.mouth.mouth
        this.handleClickUp = this.handleClickUp.bind(this)
        this.handleClickDown = this.handleClickDown.bind(this)
    }

    handleClickUp() {
        if (mou >= 0 && mou <= 11) {
            mou = this.state.mouth + 1
            this.setState({mouth: this.state.mouth + 1})
        }

    }

    handleClickDown() {
        if (mou >= 2 && mou <= 12) {
            mou = this.state.mouth - 1
            this.setState({mouth: this.state.mouth - 1})
        }

    }

    render() {
        const mouth = '/mouth' + '/' + this.state.mouth
        return (
            <HashRouter basename="/TaskCalendar">

                <Link to={mouth} onClick={this.handleClickDown} className="arrowreverse">
                </Link>


                <Link to={mouth} onClick={this.handleClickUp} className="arrow">
                </Link>
                <Route path="/mouth/:mouth" component={Dates}/>
            </HashRouter>
        );
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        handleClickDown: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                payload: 123
            });
        }
    };
}

export default connect((state) => {
        return state
    },
    mapDispatchToProps
)(TaskCalendar)
