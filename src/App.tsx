
import './App.css'
import {MikrotaskOne} from "./assets/MikrotaskOne.tsx";
import {ButtonExample} from "./assets/ButtonExample.tsx";
import {UniversalBtn} from "./components/UniversalBtn.tsx";
import {Hook} from "./assets/Hook.tsx";
import {FilterMethod} from "./assets/FilterMethod.tsx";
import {useState} from "react";

export function App() {

    const ButtonFoo1 =(subscriber:string, adress:string, age:number)=>{
     console.log(subscriber, adress, age)
    }
    const ButtonFoo2 =()=>{
        console.log('Hello btn2')
    }

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const[state, setState] = useState<FilterType>("All")

    let currentMoney = money
    if(state === "Dollar"){
        currentMoney = money.filter((money) => money.banknote === "dollar")
    }else if(state === "Ruble"){
        currentMoney = money.filter((money) => money.banknote === "ruble")
    }
    const onClickFilterHandler = (nameButton: FilterType)=>{
        setState(nameButton)
    }

  return (
      <div>
          <MikrotaskOne/>
          <ButtonExample/>
          <UniversalBtn name={"Button1"} callback={()=>ButtonFoo1('Hello btn1', 'Minsk', 28)}/>
          <UniversalBtn name={"Button2"} callback={ButtonFoo2}/>
          <Hook/>
          <FilterMethod currentMoney={currentMoney} onClickFilterHandler = {onClickFilterHandler}/>

      </div>
  )
}


