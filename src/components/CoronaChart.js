import React from 'react';
import { Chart } from "react-google-charts";

const CoronaChart = ({ chartData }) => {
    console.log(chartData);
    return (
        <div>
            {
                chartData.map((item)=>{
                    return(
                        <Chart
                            key={item.CountryCode}
                            width={'500px'}
                            height={'500px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Corona', 'Current Status'],
                                ['Total Confirmed', parseInt(item.TotalConfirmed)],
                                ['Total Death', parseInt(item.TotalDeaths) ],
                                ['Total Recovered', parseInt(item.TotalRecovered)],
                            ]}
                            options={{
                                title: `All Over in ${item.Country}`,
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    
                    )
                })
            }
        </div>
    )
}

export default CoronaChart;