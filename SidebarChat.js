import React, { useEffect, useState } from 'react';
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed ] = useState('');

    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("please enter room name");

        if (roomName){
            
        }
    };

    return !addNewChat ? (
        <div className = 'sidebarChat'>
            <Avatar 
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className = 'sidebarChat__info'>
                <h2>room name</h2>
                <p> this is the last message</p>
            </div>
            
        </div>
    ):(
      <div onClick={createChat}
           className="sidebarChat" 
      >
          <h2>Add New Chat</h2>
      </div>  
    );
}

export default SidebarChat
