import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useState, useEffect } from 'react';
import axios from '../axios'
import './Chat.css'

const Chat = ({ messages }) => {
    const [input, setInput] = useState(['']);

    const [seed, setSeed ] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message:input,
            name:'demo app',
            timestamp:'just now',
            recieved: false
        }
        );

        setInput("");
    };

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
     }, [])

    return (
        <div className = 'chat'>
            <div className= "chat__header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                 />

                <div className= 'chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>last seen...</p>
                </div>

                <div className= 'chat__headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className= 'chat__body'>
                {messages.map( (message) => (
                    <p 
                        className={`chat__message ${message.received && 'chat__receiver'}`
                     }>
                        <span className= 'chat__name'>{message.name}</span>
                            {message.message}
                        <span className='chat__timestamp'> {message.timestamp}</span>
                    </p>
                ))}
                
                {/* <p className='chat__message chat__receiver'>
                    <span className= 'chat__name'>jon</span>
                    this is a message
                    <span className='chat__timestamp'> {new Date()
                    .toUTCString() } </span>
                </p>
                <p className='chat__message'>  
                    <span className= 'chat__name'>jon</span>
                    this is a message
                    <span className='chat__timestamp'> {new Date()
                    .toUTCString() } </span>
                </p> */}
            </div>   

            <div className= 'chat__footer'>
                <InsertEmoticonIcon />
                <form>
                <input 
                    value={input}
                    onChange={ (e) => setInput(e.target.value)} 
                    placeholder="type a message" 
                    text='text'
                />
                <button onClick={sendMessage} type='submit'>
                    send a message
                </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
