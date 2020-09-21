import React from "react";
import {connect} from 'react-redux'
import '../css/inline.css'
let moux = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let mous = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let running =[]
class Line extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        let list=this.props.payload.list;
        let w;
        let u=[];
        for(let i=0;i<list.length;i++)
        {
            let x=list[i];
            let t=x.conBegin.toArray();
            let f=x.conEnd.toArray();
            if(t[1]===this.props.mouth-1&&t[2]===this.props.day)
            {
                 u.push(x.name)
            }
        }
        return <div>{u.map((value,index)=>{return <div className={"inlinecss"} key={index}>{value}</div>})}</div>
    }
}

export default connect((state) => {
    return state
})(Line)
