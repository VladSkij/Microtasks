
type ButtonPropstype = {
    name: string,
    callback: ()=>void,
}



export const Button = ({name, callback }:ButtonPropstype) => {

    const onClickButtonHandler = ()=>{
        callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

