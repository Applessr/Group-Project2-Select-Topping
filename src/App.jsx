
import CheckBox from "./component/CheckBox.jsx";
import { toppings } from "./data";

function App() {
  return (
    <div className="flex flex-col bg-[#ffffff] m-auto w-[60%] rounded-lg text-[#1E0342] shadow-md">
      <h1 className="text-center font-semibold pt-4 text-2xl">Select Topping</h1>
      <CheckBox />
    </div>
  );
}

export default App;