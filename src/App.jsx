import CheckBox from "./components/Checkbox";
import { toppings } from "./data";

function App() {
  return (
    <div className="bg-[url('/')] flex-col   align-middle items-center from-neutral-900 " >
      <h1 className=" bg-slate-50 flex m-auto text-3xl ml-auto p-10 w-52 h-40 text-center  rounded-xl mb-3 ">Select Topping</h1>
      <CheckBox />
    </div>
  );
}

export default App;