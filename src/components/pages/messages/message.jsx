import React from 'react';
import UserNickName from './Contact/contact';
import PropsMessage from './MessageInfo/propsMessage';
import './styleMass.css'





const Messages = (props) => {

    let dialogMap = props.state.dialogData.map(el => <UserNickName key={el.id} name={el.name} id={el.id} />);
    let messageMap = props.state.messageData.map(el => <PropsMessage key={el.id} messageThisUser={el.message} id={el.id} />);
    
    let changeText = (e) => {
        let text = e.target.value;
        props.changeTextContainer(text) 
        console.log(text)
    }
    let clickSubValue = () => {
        props.clickSubValueContainer()
    }
    return (
        <div className="boxContact" onClick={() => {
            console.log(props)
          }}> 
            <div className="boxInfo">
                {dialogMap}
            </div>
            <div className="boxInfoCont">
                {messageMap}
               <div className="boxNewMessage"> 
               <textarea className="textariaMessages" placeholder="new message" value={props.state.updateMessage} rows="1" onChange={changeText} />
               <input className="submitMassage" type="submit" value="ok" onClick={clickSubValue}  />
               </div>
            </div>
        </div>
    )
};


export default Messages
