import {type ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessageFunctionName: (title:string)=>void,
}

export const FullInput = ({addMessageFunctionName}:FullInputPropsType) => {

    let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = ()=>{
        addMessageFunctionName(title)
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={()=>{onClickButtonHandler()}}>+</button>
        </div>
    );
};

