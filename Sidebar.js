import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className= 'sidebar'>
            <div className = 'sidebar__header'>
                    <Avatar src= {user?.photoURL} />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className = 'sidebar__search'>
                 <div className = 'sidebar__searchContainer'>
                     <SearchOutlinedIcon />
                     <input placeholder = 'search chat' />
                 </div>
               
            </div>
            <div className = 'sidebar__chats' >
                    <SidebarChat addNewChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
             </div>

        </div>
    )
}

export default Sidebar
