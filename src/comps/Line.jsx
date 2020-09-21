import React from "react";
import {connect} from 'react-redux'
import '../css/inline.css'
class Line extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"inlinecss"}>
                {this.props.payload.list[0].name}
            </div>
        );
    }
}

export default connect((state) => {
    return state
})(Line)
