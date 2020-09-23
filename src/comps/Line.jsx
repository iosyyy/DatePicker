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
                u.push((<span className="inlinecss">
                    <svg t="1600758610914" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="884" width="10" height="10">
                        <path
                            d="M893.164308 13.154462c42.535385 0 77.193846 34.658462 77.193846 77.981538v809.747692c0 42.535385-34.658462 77.193846-77.193846 77.193846h-742.793846c-11.027692 0-20.48-2.363077-29.932308-6.301538a61.44 61.44 0 0 1-23.630769-16.541538 72.546462 72.546462 0 0 1-23.63077-54.35077v-144.147692h100.036923a68.529231 68.529231 0 0 0 0-137.058462H73.176615v-55.926153h100.036923c37.809231 0 68.529231-30.72 68.529231-67.741539a68.529231 68.529231 0 0 0-68.529231-68.529231H73.176615v-56.713846h100.036923c37.809231 0 68.529231-29.932308 68.529231-67.741538a68.529231 68.529231 0 0 0-68.529231-68.529231H73.176615v-143.36c0-22.055385 8.664615-41.747692 23.63077-55.138462 6.301538-7.876923 14.966154-12.603077 23.630769-16.541538 9.452308-3.938462 18.904615-6.301538 29.932308-6.301538z m-241.033846 234.732307a176.836923 176.836923 0 0 0-244.184616 53.563077c-52.775385 81.92-29.144615 191.409231 52.775385 244.184616-75.618462 31.507692-129.969231 99.249231-145.723077 179.593846a39.384615 39.384615 0 0 0 30.72 45.686154c2.363077 0 5.513846 0.787692 7.876923 0.787692 1.496615 0 2.756923-0.630154 4.174769-0.787692l401.486769 0.787692c2.363077 0 4.726154-0.787692 7.089231-0.787692h0.787692a39.384615 39.384615 0 0 0 30.72-45.686154c-15.753846-80.344615-70.104615-148.086154-145.723076-179.593846 21.267692-14.178462 39.384615-32.295385 52.775384-53.563077 52.775385-81.92 29.144615-191.409231-52.775384-244.184616z m-478.916924 401.723077a38.754462 38.754462 0 1 1 0 77.508923H44.110769a38.833231 38.833231 0 0 1 0-77.508923h129.181539z m0-192.827077a38.754462 38.754462 0 1 1 0 77.587693H44.110769a38.833231 38.833231 0 1 1 0-77.587693h129.181539z m0-192.748307a38.754462 38.754462 0 0 1 0 77.587692H44.110769a38.754462 38.754462 0 0 1-0.157538-77.587692H173.292308z"
                            p-id="885"></path>
                    </svg>{lists[i].name}</span>))
            }
            else if(mouBe<=mouth-1&&mouEn>=mouth-1)
            {
                if(mouBe===mouth-1&&mouEn===mouth-1)
                {
                    if(daBe<=day&&daEn>=day)
                    {
                        u.push(<span style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<span></span>)
                    }
                }else if(mouBe<mouth-1&&mouEn===mouth-1)
                {
                    if(daEn>=day)
                    {
                        u.push(<span style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<span></span>)
                    }
                }else if(mouBe===mouth-1&&mouEn>mouth-1)
                {
                    if(daBe<=day)
                    {
                        u.push(<span style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                    }
                    else{
                        u.push(<span></span>)
                    }
                }else if(mouBe<mouth-1&&mouEn>mouth-1)
                {
                    u.push(<span style={{backgroundColor: "blue",width:"auto",height: 20}}/>)
                }
            }
        }

        return (<div  style={{display:"flex",flexDirection:"column"}}> {u.map((value,index)=>{return <span key={index}>{value}</span>})}</div>)
    }
}

export default connect((state) => {
    return state
})(Line)
