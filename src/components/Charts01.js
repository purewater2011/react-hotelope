/**
 * Created by Eric-mac on 16/5/27.
 */
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

//const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400, name2: '2016-01'},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210, name2: '2016-02'},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290, name2: '2016-03'},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000, name2: '2016-04'},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181, name2: '2016-05'},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500, name2: '2016-06'},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100, name2: '2016-07'},
];

export default class Charts01 extends React.Component{

    render () {
        return (
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name2"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 4 5 2"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="amt" stroke="#821c9d" strokeDasharray="3 4 5 2"/>
            </LineChart>
        );
    }
}