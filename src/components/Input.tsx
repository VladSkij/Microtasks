import type {ChangeEvent} from "react";

type inputPropsType = {
    title: string,
    setTitle: (title:string)=>void,
}

export const Input = ({ title, setTitle}:inputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};

