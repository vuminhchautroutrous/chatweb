import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
// import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import {database} from '../../firebase';
import 'firebase/firestore';

import './MessageList.css';

export default function MessageList(props) {
  const {messages} = props;
  const {handleAddMessage} = props;
  const {user} = props;
  return (
    <div className="message-list h-100 w-100">

      <div className="message-list-container overflow-auto">
        {
          messages && messages.map(message => {
            return (
              <Message key={message.id} message={message} user={user}/>
            )
          })
        }
      </div>
      <Compose handleAddMessage={handleAddMessage}/>
    </div>
  );
}