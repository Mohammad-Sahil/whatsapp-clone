import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../styles/SidebarChat.css';
import db from '../firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({id, name, addNewChat }) => {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[]);

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy("timestamp", "desc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
        }
    },[])

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');
        console.log(roomName);
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            });
        }
    }
    console.log("this is room name >>>", name);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
        <div className='sidebarChat'>
        <Avatar className='avatar' src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}/>
        <div className="sidebarChar_info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
        </div>
    </div>
    </Link>
  ) : (
      <div onClick={createChat} className="sidebarChat">
          <h2>Add new chat</h2>
      </div>
  )
}

export default SidebarChat