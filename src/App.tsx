import React, { MouseEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { data } from './data';
import { BasicLineChart } from './charts/BasicLineChart';
import { BasicScatterPlot } from './charts/BasicScatterPlot';
import { BasicBarChart } from './charts/BasicBarChart';

function App() {
  return (
    <div className="App">
      <BasicLineChart data={data} />
      {/* <BasicScatterPlot data={data} /> */}
      {/* <BasicBarChart data={data} /> */}
    </div>
  );
}

export default App;
