// import React from 'react';

import {useState} from "react";
import {FullInput} from "./components/FullInput.tsx";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
export const InputMikrotask = () => {

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ])



    let [title, setTitle] = useState('');
    console.log(title)

    const addMessage = (title:string)=>{
        let newMessage = {message:title};
        setMessage([newMessage, ...message])

    }

  const onClickButtonHandler = ()=>{
      addMessage(title);
      setTitle('');
  }

    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput addMessageFunctionName = {addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

            <Input title={ title} setTitle={ setTitle } />
            <Button name={"Button +"} callback={onClickButtonHandler }/>
        </div>
    );
};

