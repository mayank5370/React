import { useRef, useEffect} from 'react'
import { ChatMessage } from './ChatMessage';

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containereElem = chatMessagesRef.current;
    if (containereElem) {
      containereElem.scrollTop = containereElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-mess-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
