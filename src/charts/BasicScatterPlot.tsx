import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from "recharts";
import { ITitle } from "../data";

export function BasicScatterPlot({ data }: { data: ITitle[] }) {
  // added this to get a better sized randomly selected data set (otherwise it's too big and lags the browser)
  // const randomSelection = data.filter(() => Math.random() > 0.9);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="startYear" name="Year" domain={[1915, 2025]} />
        <YAxis type="number" dataKey="averageRating" name="Rating" domain={[0, 10]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Ratings over Time" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}