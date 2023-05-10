import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label } from "recharts";
import { ITitle } from "../data";
import { schemeCategory10 } from 'd3';

function averageRuntimeByGenre(data: ITitle[]): { genre: string, averageRuntimeByGenre: number, fill: string }[] {
  const genreMap = new Map<string, { genre: string, totalRuntime: number, count: number }>()
  data.forEach((title) => {
    title.genres.forEach((genre) => {
      if (!genre || genre === '\\N') {
        return
      }

      if (genreMap.has(genre)) {
        const genreData = genreMap.get(genre)
        if (genreData) {
          genreData.count++
          genreData.totalRuntime += title.runtimeMinutes
        }
      } else {
        genreMap.set(genre, { genre, totalRuntime: title.runtimeMinutes, count: 1 })
      }
    });
  });

  const arrayOfGenreRuntimeData = Array.from(genreMap.values());
  return arrayOfGenreRuntimeData.map(({ genre, totalRuntime, count }, i) => ({
    genre,
    averageRuntimeByGenre: totalRuntime / count,
    fill: schemeCategory10[i % 10]
  }));
}

export function BasicBarChart({ data }: { data: ITitle[] }) {
  const averageRuntimeByGenreArray = averageRuntimeByGenre(data);
  return (
    <BarChart
      width={1400}
      height={600}
      margin={{
        top: 20,
        right: 20,
        bottom: 80,
        left: 20,
      }}
      data={averageRuntimeByGenreArray}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="genre" type="category" interval={0} angle={-45} textAnchor="end">
        <Label value='Genre' position='insideBottom' style={{ textAnchor: 'middle' }} offset={-70} />
      </XAxis>
      <YAxis domain={[0, 100]}>
        <Label angle={-90} value='Runtime in Minutes' position='insideLeft' style={{ textAnchor: 'middle' }} />
      </YAxis>
      <Tooltip />
      <Bar dataKey="averageRuntimeByGenre" fill="#8884d8" unit={" minutes"} />
    </BarChart>
  )
}