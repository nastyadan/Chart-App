import Chart from "react-google-charts";

export const data = [
  ["Вид поведениея", "Частота возникновения в процентах"],
  ["Сотрудничество", 19],
  ["Копромисс", 39],
  ["Избегание", 16],
  ["Приспособление", 23],
  ["Соперничество", 3],
];

export const options = {
  title: "Способы поведения в конфликтной ситуации (опросник Томаса)",
};

function App() {
  return (
    <div className="App">
  <Chart
  
  chartType="PieChart"
  data= { data }
  options = { options }
  width="100%"
  height="400px"
  legendToggle>

  </Chart>
    </div>
  );
}

export default App;
