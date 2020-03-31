import React, {Fragment} from 'react';
import {useTheme} from '@material-ui/core/styles';
/**
 * See documentation at
 * http://recharts.org/en-US/api/Line
 */
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';

import Title from './Title';


// Format data
function createData(data = []) {
  return data.map(entry => ({
    date: entry.value?.[0],
    value: entry.value?.[1],
  }));
}

export default function Chart(props) {
  const theme = useTheme();
  const data = createData(props.data);

  return (
    <Fragment>
      <Title>{data.length ? props.title : 'Loading...'}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 16,
            left: 4,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          { data.length && <YAxis stroke={theme.palette.text.secondary} /> }
          <Line type="monotone" dataKey="value" stroke={props.graphColor} dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  );
}
