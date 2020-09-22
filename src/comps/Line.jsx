import React from "react";
import {connect} from 'react-redux'
import '../css/inline.css'
import {blue} from "@ant-design/colors";
let moux = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let mous = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let running =[]
class Line extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        let u=[];
        let lists=this.props.payload.list;
        let mouth=this.props.mouth
        let day=this.props.day
        for(let i=0;i<lists.length;i++)
        {
            let mouBe = lists[i].conBegin.toArray()[1];
            let daBe = lists[i].conBegin.toArray()[2];
            let mouEn = lists[i].conEnd.toArray()[1];
            let daEn = lists[i].conEnd.toArray()[2];
            if(mouBe===mouth-1&&daBe===day)
            {
                u.push(<div className="inlinecss">{lists[i].name}</div>)
            }
            else if(mouBe<=mouth-1&&mouEn>=mouth-1)
            {
                if(mouBe===mouth-1&&mouEn===mouth-1)
                {
                    if(daBe<=day&&daEn>=day)
                    {
                        u.push(<div style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<div></div>)
                    }
                }else if(mouBe<mouth-1&&mouEn===mouth-1)
                {
                    if(daEn>=day)
                    {
                        u.push(<div style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<div></div>)
                    }
                }else if(mouBe===mouth-1&&mouEn>mouth-1)
                {
                    if(daBe<=day)
                    {
                        u.push(<div style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<div></div>)
                    }
                }else if(mouBe<mouth-1&&mouEn>mouth-1)
                {
                    u.push(<div style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                }
            }
        }
        return <div>{u.map((value,index)=>{return value})}</div>
    }
}

export default connect((state) => {
    return state
})(Line)
