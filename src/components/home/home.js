import { ChatEngine } from "react-chat-engine";
import { Chats } from "../chats";
import "./home.css"

export const Home = () => {

    return (
        <>
            <ChatEngine
                height="100vh"
                projectID={ process.env.REACT_APP_PROJECT_ID }
                userName = { process.env.REACT_APP_USER_NAME }
                userSecret = { process.env.REACT_APP_USER_SECRET }
                renderChatFeed={ chatAppProps => <Chats { ...chatAppProps } /> }
            />

        </>
    );


};
