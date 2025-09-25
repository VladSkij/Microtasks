
type ButtonType ={
    name:string,
    callback:()=>void,
}

export const UniversalBtn = ({name, callback}:ButtonType) => {
   const onclickHandler = ()=>{
       callback()
   }

    return(
        <button onClick={onclickHandler}>{name}</button>
    )
}


