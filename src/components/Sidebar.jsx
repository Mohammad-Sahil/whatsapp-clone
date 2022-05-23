import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';
import SidebarChat from './SidebarChats';
import db from '../firebase';
// import { HomeIcon, IntegrationInstructionsIcon, CodeIcon, ArticleIcon, ViewQuiltIcon, BrushIcon, GroupIcon, GroupsIcon} from '@mui/icons-material/Home';
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
// import CodeIcon from '@mui/icons-material/Code';
// import ArticleIcon from '@mui/icons-material/Article';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import BrushIcon from '@mui/icons-material/Brush';
// import GroupIcon from '@mui/icons-material/Group';
// import GroupsIcon from '@mui/icons-material/Groups';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
      setRooms(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ));
    return () => (
      unsubscribe()
    )
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar/>
        <div className="sidebar_headerRight">
        <IconButton>
          <DonutLarge/>
        </IconButton>
          <IconButton>
            <Chat/>
          </IconButton>
          <IconButton>
             <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
      <div className="sidebar_searchContainer">
      <SearchOutlined/>
        <input placeholder='Search or start new chat' type="text"/>
      </div>
      </div>

      <div className="sidebar_chats">
      <SidebarChat addNewChat/>
      {rooms.map(room => (
        <SidebarChat
          key={room.id}
          id={room.id}
          name={room.data.name}
        />
      ))}
      <SidebarChat/>
      <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar;