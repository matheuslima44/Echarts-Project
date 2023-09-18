const getOptionChart1 = () => {};
const getOptionChart2 = () => {};

const initCharts = () => {
  const chart1 = echarts.init(document.getElementById("chart1"));
  const chart2 = echarts.init(document.getElementById("chart2"));

  chart1.setOption(getOptionChart1());
  chart1.setOption(getOptionChart2());
};

window.addEventListener("load", () => {
  initCharts();
});
