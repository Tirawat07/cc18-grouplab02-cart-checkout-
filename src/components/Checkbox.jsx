import { useState } from "react";
import { toppings } from "../data.js";

export default function CheckBox() {

  const [total, setTotal] = useState(0)
  const [nameList, setNameList]= useState([])
  const [sumList,setSumList] =useState(nameList)
  function hdlChange(e,price,index) {
    if(e.target.checked){
        setTotal(total+(+e.target.value))
        setNameList([...nameList, {name: e.target.name,price: e.target.value}])
    }else{
        setTotal(total-(+e.target.value))
        const newNameList = nameList.filter((el)=> el.name !== e.target.name)
        console.log(newNameList,'=====')
        setNameList([newNameList])
    }
  }
  console.log(nameList)
  
  const hdlCheckout =()=>{
    setSumList(nameList)
  }

  return (
    <>
    <div className="flex-col  bg-slate-400 p-1 ">
      {toppings.map((item, index) => (
        <div className="text-xl flex px-24  bg-slate-50 
        hover:bg-orange-200 border-solid border-8 border-r-4 w-3/5 m-auto rounded-md p-3 justify-between gap-4 items-baseline  mt-8 "  >
          <input className="flex 
          transition-all duration-500 ease-in-out transform px-8 py-8 hover:scale-150
          " type="checkbox" index = {index} name={item.name} value={item.price} onChange={hdlChange} />
          {item.name}
          <div className=" flex p-1    items-baseline">{item.price}</div>
        </div>
      ))}
      <h3 className="flex bg-slate-100 w-fit rounded-2xl  text-3xl mt-10 mb-10  ml-16 text-center p-3">Total : {total}</h3>
    </div>
    <button className="border p-3 mt-7 mb-8 ml-20
    transition-all duration-500 ease-in-out transform hover:bg-orange-300 hover:scale-150 bg-red-400 rounded-md" onClick={(e)=>{hdlCheckout(toppings.price,toppings.name)}}>Check out</button>
    {sumList.map((item)=>
     <div className="bg-slate-100 w-screen h-fit">
      <p className="bg-orange-300 rounded-sm w-3/5 h-1/5 flex  m-auto text-center p-5 mt-2  items-center" >{item.name} : {item.price}</p>
      </div> 
    )
    }
    </>
  );
}