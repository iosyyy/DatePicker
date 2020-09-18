import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux";
import '../css/table.css'

var dates = ['星期1', '星期2', '星期3', '星期4', '星期5', '星期6', '星期天']
var moux = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var mous = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var tem = [1, 2, 3, 4, 5, 6, 7]
var tes=[1,2,3,4,5,6]
var year = 2019

class Dates extends React.Component {
    constructor(props) {
        super(props);
        const mouth = this.props.match.params.mouth;
        var firstDayOfTheMonth = 3
        this.state = {firstDayOfTheMonth: firstDayOfTheMonth - 1, mouth: mouth, list: this.props.payload.list}
    }

    render() {
        let firstDayOfTheMonth = this.state.firstDayOfTheMonth
        let list = this.state.list
        const mouth = this.props.match.params.mouth
        if ((year + 1) % 4 === 0 || (year + 1) % 400 === 0 && (year + 1) % 100 !== 0) {
            for (let i = 0; i < mouth - 1; i++) {
                firstDayOfTheMonth += moux[i]
            }
        } else {
            for (let i = 0; i < mouth - 1; i++) {
                firstDayOfTheMonth += mous[i]
            }
        }
        firstDayOfTheMonth = firstDayOfTheMonth % 7 + 1
        let ans = false;
        let sum = 1;
        return (
            <div>
                <div>2020年{mouth}月</div>
                <table className="bora" border="0" cellSpacing="1" cellPadding="0">
                    <thead className="bora">
                    <tr>{dates.map((name, index) => {
                        return <th className="bora" key={index}>{name}</th>
                    })}</tr>
                    </thead>
                    <tbody className="bora">
                    {tes.map((name, index) => {
                        return (<tr key={index}>
                            {tem.map((num, index) => {
                                if (((num === firstDayOfTheMonth) || ans === true) && sum <= moux[mouth - 1]) {
                                    ans = true;
                                    return <td className="bora" key={index}>
                                        {sum++}
                                    </td>
                                } else {
                                    return <td className="bora" key={index}></td>
                                }
                            })}
                        </tr>)
                    })}

                    </tbody>

                </table>
            </div>

        );
    }
}

export default connect((state) => {
        return state
    }
)(Dates)
