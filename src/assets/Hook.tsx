import {useState} from "react";

export const Hook = ()=>{

    // let a = 1
    let [a,setA]= useState(1)
    const onClickHundler = ()=>{
        setA(++a)
        console.log(a)
    }

    const onClickHundler2 = ()=>{
        setA(0)
        console.log(a)
    }

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHundler}>number</button>
            <button onClick={onClickHundler2}>0</button>
        </div>
    )
}