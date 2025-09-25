
type ButtonType= {
    currentMoney:{
        banknote:string,
        nominal:number,
        number:string
    },
    onClickFilterHandler: ()=>void,
}
type FilterType = "All" | "Dollar" | "Ruble"


export const FilterMethod = ({currentMoney, onClickFilterHandler}:ButtonType)=>{
    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return(
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={()=>onClickFilterHandler("All")}>All</button>
                <button onClick={()=>onClickFilterHandler("Dollar")}>Dollar</button>
                <button onClick={()=>onClickFilterHandler("Ruble")}>Ruble</button>
            </div>

        </div>


    );
}