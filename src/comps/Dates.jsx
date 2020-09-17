import React from "react";
import ReactDOM from 'react-dom'

var dates=['星期1','星期2','星期3','星期4','星期5','星期6','星期天']
export default class Dates extends React.Component
{
    constructor(props) {
        super(props);
        console.log(this.props.match)
    }

    render() {
        const mouth=this.props.match.params.mouth;
        return (
            <div>
                <div>2020年{mouth}</div>
                <table>
                    <thead>
                        <tr>{dates.map((name,index)=>{return <th key={index}>{name}</th>})}</tr>
                    </thead>

                </table>
            </div>

        );
    }
}
