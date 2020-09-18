import React from "react";
import ReactDOM from 'react-dom'

var dates=['星期1','星期2','星期3','星期4','星期5','星期6','星期天']
var moux=[31,29,31,30,31,30,31,31,30,31,30,31]
var mous=[31,28,31,30,31,30,31,31,30,31,30,31]
var year=2019

export default class Dates extends React.Component
{
    constructor(props) {
        super(props);
        const mouth = this.props.match.params.mouth;
        var firstDayOfTheMonth = 3
        this.state={firstDayOfTheMonth:firstDayOfTheMonth-1,mouth:mouth}
    }

    render() {
        let firstDayOfTheMonth=this.state.firstDayOfTheMonth
        const mouth= this.props.match.params.mouth
        if ((year+1) % 4 == 0 || (year+1)  % 400 == 0 && (year+1)  % 100 != 0)
        {
            for(let i=0;i<mouth-1;i++)
            {
                firstDayOfTheMonth+=moux[i]
            }
        }else
        {
            for(let i=0;i<mouth-1;i++)
            {
                firstDayOfTheMonth+=mous[i]
            }
        }
        firstDayOfTheMonth=firstDayOfTheMonth%7+1
        return (
            <div>
                <div>2020年{mouth}</div>
                <table>
                    <thead>
                        <tr>{dates.map((name,index)=>{return <th key={index}>{name}</th>})}</tr>
                    </thead>

                </table>
                <div>{firstDayOfTheMonth}</div>
            </div>

        );
    }
}
