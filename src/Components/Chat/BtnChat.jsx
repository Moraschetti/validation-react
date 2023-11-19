import React, { useState } from 'react';
import 'btnChat.css';
import Chatbot from 'react-chatbot-kit';

function BtnChat() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };


  return (
    <div>
    <button 
    className='appChatbotContainer'
    onClick={toggleChat}>hola
  
    </button>
    {chatOpen && <Chatbot />}
     {}
    
  </div>
  );
}

export default BtnChat;
