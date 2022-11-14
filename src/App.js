import "./App.css";
import BarChart from "./components/BarChart";
import ScatterPlot from "./components/ScatterPlot";
import dataSet from "./Store/Wine-Data.json";
import { extractBarData, extractScatterData } from "./Utilities/extractData";

function App() {
  const scatterData = extractScatterData(dataSet);
  const barData = extractBarData(dataSet);
  return (
    <div className="App">
      <h2>Scatter Plot of Color Intensity and Hue</h2>
      <ScatterPlot data={scatterData} />
      <h2>Bar Chart of Mailc Acid on average in different Alcohol types</h2>
      <BarChart data={barData} />
    </div>
  );
}

export default App;
