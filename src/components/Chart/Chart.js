import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoint.map(dataPoint =>dataPoint.value);
    const maxTot = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoint.map((dataPoint) => <ChartBar key={dataPoint.id} maxValue={maxTot} value={dataPoint.value} label={dataPoint.value}/>)}
    </div>
}

export default Chart;