import { useState } from "react";
import { toppings } from "../data.js";

export default function CheckBox() {

  const [total, setTotal] = useState(0);
  const [nameList, setNameList] = useState([]);
  const [sumList, setSumList] = useState([]);

  function hdlChange(e) {
    const value = +e.target.value; 
    if (e.target.checked) {
      setTotal(prevTotal => prevTotal + value);
      setNameList(prevList => [...prevList, { name: e.target.name, price: value }]);
    } else {
      setTotal(prevTotal => prevTotal - value);
      const newNameList = nameList.filter((el) => el.name !== e.target.name);
      setNameList(newNameList); 
    }
  }

  const hdlCheckout = () => {
    setSumList(nameList);
  };

  return (
    <>
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-10 py-2 font-semibold">
        <span className="text-2xl">Topping</span>
        <span className="ml-auto text-2xl">Price</span>
      </div>
  
      {toppings.map((item, index) => (
        <div className="flex px-10 py-2 text-[20px]" key={index}>
          <input className="w-5 mr-4"
            type="checkbox"
            name={item.name}
            value={item.price}
            onChange={hdlChange}
          />
          <span>{item.name}</span>
          <span className="ml-auto">฿{item.price.toFixed(2)}</span>
        </div>
      ))}
  
      <hr className="mx-auto w-[90%] text-gray-700 border-t-2" />
  
      <h3 className="text-2xl font-semibold p-3 flex justify-between px-10">
        Total: <span>฿{total.toFixed(2)}</span>
      </h3>
    </div>
  

    <button className="bg-[#6096B4] text-[rgb(249,249,249)] rounded-md my-4 text-2xl font-semibold p-3 mx-auto w-[70%] hover:bg-[#729fb7b5]" onClick={hdlCheckout}>
      Check out
    </button>

    <hr className="mx-auto w-[90%] text-gray-700 border-t-2" />

    <div className="mt-8 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 px-10">Selected Toppings:</h3>
      {sumList.length > 0 ? (
        sumList.map((item, index) => (
          <div className="flex justify-between p-2 px-10 text-[18px]" key={index}>
            <p>{item.name}</p>
            <p>฿{item.price.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No toppings selected.</p>
      )}
    </div>
  </>
  );
}