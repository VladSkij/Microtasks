
export const ButtonExample = () => {

    const MyfirstSubscriber = (name:string)=>{
       alert(name);
    }

    // const fooo1=()=>{
    //     //nothing
    //     console.log("100200");
    // }
    //
    // const fooo2=(number:number)=>{
    //     console.log(number)
    // }


    return (
        <div>
            {/*<button onClick={(event)=>{console.log('Hellow!')}}>click me </button>*/}
            {/*<button onClick={MyfirstSubscriber("Vlaaad!")}>click me </button>*/}
            <button onClick={()=>MyfirstSubscriber('Vlaad!!!')}>click me </button>
            <button onClick={()=>MyfirstSubscriber('Iraaaa!!!')}>click me </button>

            {/*<button onClick={fooo1}>1</button>*/}
            {/*<button onClick={()=>fooo2(100200)}>2</button>*/}
        </div>


    )
}