import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import '../styles/Chat.css';

const Chat = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState();
    const [roomName, setRoomName] = useState('');
    const { roomId } = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[roomId]);
    useEffect(() => {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
            setRoomName(snapshot.data().name)
        ))
    },[roomId]);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you types >>>', input);
        setInput('')
    } 
  return (
    <div className='chat'>
        <div className="chat_header">
            <Avatar className='avatar' src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}/>
            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at 4pm today</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className={`chat_message ${true && "chat_reciever"}`}><span className="chat_name">
                Sahil
            </span>
            Hey Guys
            <span className="chat_timestamp">
                3:52pm
            </span>
            </p>
        </div>
        <div className="chat_footer">
                <IconButton>
                <InsertEmoticon/>
                </IconButton>
            
            <form>
               <input onChange={(e) => setInput(e.target.value)} value={input} type='text'/>
               <button onClick={sendMessage}>Send a message</button>
            </form>
                <IconButton>
                <Mic/>
                </IconButton>
        </div>
    </div>
  )
}

export default Chat