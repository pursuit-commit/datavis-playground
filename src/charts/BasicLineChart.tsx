import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { ITitle } from '../data';

function runtimeByYear(data: ITitle[]): { year: number; averageRuntime: number }[] {
  const runtimeByYearObj = data.reduce((acc, curr) => {
    const year = curr.startYear;
    const runtime = curr.runtimeMinutes;

    if (!year || !runtime) {
      return acc;
    }

    if (acc[year]) {
      acc[year].count++;
      acc[year].runtime += runtime;
    } else {
      acc[year] = { year, count: 1, runtime };
    }
    return acc;
  }, {} as { [key: number]: { year: number; count: number; runtime: number } });

  return Object.values(runtimeByYearObj).map(({ year, runtime, count }) => ({
    year,
    averageRuntime: runtime / count,
  }));
}

export function BasicLineChart({ data }: { data: ITitle[] }) {
  const averageRuntimeByYear = runtimeByYear(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}

        data={averageRuntimeByYear}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="year" name="Year" domain={[1905, 2025]} />
        <YAxis type="number" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Line type="monotone" dataKey="averageRuntime" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );

}