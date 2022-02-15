
import data from "./data";
import moment from "moment";
import {
  ComposedChart,
  Area,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";



function App() {
  return (
    <ComposedChart
        width={900}
        height={500}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >

        <XAxis  dataKey="time"
        type="number"
  domain={[1577829600000, 1704060000000]}
  tickFormatter={(tick) => moment(tick).format('MMM YYYY')}
  ticks={[1577829600000, 1593550800000, 1609452000000, 1625086800000, 1640988000000, 1656622800000,1672524000000, 1688158800000, 1704060000000]}/>
        <YAxis tickCount={10} domain={[0, 9]}/>
        <Legend payload={[{ value: 'MONTHLY DATA', type:  'circle', color: '#333' }, { value: 'FORECAST', type: 'line' , color: '#333'}, { value: 'ACCEPTABLE INCREASE', type: 'square', color: '#b1b1fe' },{ value: 'FORECASTED ACCEPTABLE', type: 'square', color: ['#b1fefe']}]}/>
        <Tooltip 
        labelFormatter={(value) => moment(value).format('MMM YYYY')}/>
        <Area type="monotone" dataKey='acceptable_increase' stroke="#0000fe" fill="#b1b1fe" />
        <Area
        dot={{ fill: 'black', fillOpacity: 1}}
          type="monotone"
          dataKey='monthly_data'
          stroke="fff"
          fill="#fff"
          fillOpacity={100}
        />

        <Area type="monotone" dataKey='future_uv' stroke="#fff" fill="#b1fefe" />
        <Area
          type="monotone"
          dataKey='forecast'
          strokeDasharray="5 5"
          stroke="#333"
          fill="#fff"
          fillOpacity={100}
        />
        
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      </ComposedChart>
  );
}

export default App;

