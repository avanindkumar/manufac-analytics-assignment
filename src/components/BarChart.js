import ReactECharts from "echarts-for-react";

const BarChart = ({ data }) => {
  const barOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    tooltip: {},
    legend: {},
    xAxis: {
      data: data.categoryArray,
    },
    yAxis: {},
    series: [
      {
        name: "Mailc Acid on average",
        type: "bar",
        data: data.averageData,
        colorBy: "series",
        label: {
          show: true,
          formatter: (param) => `${param.value.toFixed(2)}`,
        },
      },
    ],
  };

  return <ReactECharts option={barOptions} />;
};

export default BarChart;
