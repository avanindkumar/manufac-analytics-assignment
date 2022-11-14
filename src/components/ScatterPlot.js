import ReactECharts from "echarts-for-react";

const ScatterPlot = ({ data }) => {
  const scatterOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value}",
      },
      splitLine: {
        show: false,
      },
      name: "Color Intensity",
      nameLocation: "middle",
      nameTextStyle: {},
      nameGap: 26,
    },
    yAxis: {
      type: "value",
      scale: true,
      axisLabel: {
        formatter: "{value}",
      },
      splitLine: {
        show: false,
      },
      name: "Hue",
      nameLocation: "middle",
      nameTextStyle: {},
      nameGap: 26,
    },
    series: [
      {
        data: data,
        type: "scatter",
        smooth: true,
        // Lebel is disabled here because of the cluttering in the plot
        // label: {
        //   show: true,
        // },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={scatterOptions} />;
};

export default ScatterPlot;
