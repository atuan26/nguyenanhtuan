import "./App.css";
import Form from "./bai1/Form";
import ChartComponent from "./bai2";

function App() {
  return (
    <>
      <Form />
      <div className="w-full flex justify-center mt-6">
        <ChartComponent symbol="BTCUSDT" exchange={"binance"} timeframe="15m" />
      </div>
    </>
  );
}

export default App;
