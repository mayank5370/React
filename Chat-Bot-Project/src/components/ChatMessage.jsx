import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  //const message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;
  /*
                if(sender === 'robot'){
                  return(
                    <div>
                        <img src = "img/robot.png" width = "50"/>
                        {message}
                    </div>
                    );
                }
                */
  return (
    <div className={sender === "user" ? "chat-mess-user" : "chat-mess-robot"}>
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-mess-profile" />
      )}
      <div className="chat-mess-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-mess-profile" />
      )}
    </div>
  );
}
