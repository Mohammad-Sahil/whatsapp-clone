import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import '../styles/Chat.css';
// import firebase from "firebase";
import { useStateValue } from '../context/StateProvider';

const Chat = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    const { roomId } = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    },[roomId]);
    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)));
            
            db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp", "asc").onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    },[roomId]);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you types >>>', input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: new Date().toLocaleString(),
        })

        setInput('')
    } 
  return (
    <div className='chat'>
        <div className="chat_header">
            <Avatar className='avatar' src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}/>
            <div className="chat_headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at {new Date(messages[messages.length - 1]?.timestamp).toUTCString()}</p>
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
            {messages.map((message) => (
                <p className={`chat_message ${message.name === user.displayName && "chat_reciever"}`}><span className="chat_name">
                {message.name}
                {console.log(message.name === user.displayName)}
                </span>
            {message.message}
            <span className="chat_timestamp">
                {new Date(message.timestamp).toUTCString()}
            </span>
            </p>
            ))}
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