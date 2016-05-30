/**
 * Created by Eric-mac on 16/5/27.
 */
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

//const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

//const data = [
//    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400, name2: '2016-01'},
//    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210, name2: '2016-02'},
//    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290, name2: '2016-03'},
//    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000, name2: '2016-04'},
//    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181, name2: '2016-05'},
//    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500, name2: '2016-06'},
//    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100, name2: '2016-07'},
//];

const colors = [
    "#8884d8", "#82ca9d", "#8CDCFA"
]


export default class Charts01 extends React.Component{

    //componentDidMount(){
    //    this.fetchdata(this.props.params)
    //}
    //
    //fetchdata(params){
    //    switch (params.id){
    //        case 'order' :
    //            const data = order
    //            console.log('orderdata', data)
    //            break;
    //        //case 'store' :
    //        //    const data2 = stores
    //        //    break;
    //        //case 'user' :
    //        //    const data2 = user
    //        //    break;
    //        //case 'trade' :
    //        //    const data2 = trade
    //        //    break;
    //    }
    //}

    render () {
        const { data } = this.props
        var keys = []
        for(var key in data.slice(0,1)[0]){
            keys.push(key)
        }
        return (
            <LineChart width={600} height={300}  data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey={keys[0]}/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                {
                    keys.map((value, i) =>{
                        if(i>0){
                            return(<Line key={i} type="monotone" dataKey={value} stroke={colors[i]} activeDot={{r: 2}}/>)
                        }
                    }
                    )
                }
            </LineChart>
        );
    }
}