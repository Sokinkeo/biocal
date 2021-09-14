import React from 'react';
import dayjs from 'dayjs';
import {calculateBiorhythmSeries} from '../calculations';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from 'recharts';


function formatDate(isoString){
return dayjs(isoString).format('D MMM')
    }
function BiorhythmChart({birthDate,targetDate}){
  const startDate = dayjs(targetDate).subtract(15,'days').toISOString();
  const data = calculateBiorhythmSeries(birthDate,targetDate,5)
  .map((item)=> ({...item,date:formatDate(item.date)}));
  console.log({data});
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray={"3 3"}/>
          <XAxis dataKey="date" tick={[data[3], data[15],data[28]]}/>
          <ReferenceLine x={data[15]}/>
            <Line type="natural" dot={false} dataKey="Physical" stroke="red"/>
            <Line type="natural" dot={false} dataKey="Emotional" stroke="green"/>
            <Line type="natural" dot={false} dataKey="Intellectual" storoke="blue"/>
        </LineChart>
      </ResponsiveContainer>
    )

}
export default BiorhythmChart;