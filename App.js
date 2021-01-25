import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync")
    .then((response) => {
      setMessages(response.data);
    });
  }, [])

  useEffect(() => {
    const pusher = new Pusher('02ffa68609e07e21ca4e', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
     

  }, [messages])

  
  console.log(messages);

  
  return (
    <div className="app">
    {!user ? (
      <Login />
    ) : (
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    )}
    </div>
  );
}

export default App;
