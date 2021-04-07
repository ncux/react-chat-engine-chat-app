import { MessageForm } from "./message-form";
import { Incoming } from "./incoming";
import { Outgoing } from "./outgoing";
import Loading from "./loading/loading";

export const Chats = (props) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isOutgoingMessage) => {
        return chat?.people?.map((person, i) => person?.last_read === message?.id && (
            <div
                key={i}
                className="read-receipt"
                style={{ float: isOutgoingMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})` }}
            />
        ));
    };

    const renderMessages = () => {
        return [...Object.keys(messages)].map((key, i) => {
            const message = messages[key];
            const lastMessageKey = i === 0 ? null : [...Object.keys(messages)][i - 1];
            const isOutgoingMessage = userName === message.sender.username;
            return (
                <div key={i} style={{ width: '100%' }}>
                    <div className="message-block">
                        { isOutgoingMessage ? <Outgoing message={ message } /> : <Incoming message={ message } lastMessage={ messages[lastMessageKey] } /> }
                    </div>
                    <div style={{ marginRight: isOutgoingMessage ? '18px' : '0', marginLeft: isOutgoingMessage ? '0' : '68px' }} className="read-receipts">
                        {/*{ renderReadReceipts(message, isOutgoingMessage) }*/}
                    </div>
                </div>
            );
        });

    };

    if(!chat) return (<Loading />);

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <p className="chat-title">{ chat?.title }</p>
                <p className="chat-subtitle">
                    { chat?.people?.map(person => ` ${person.person.username}`) }
                </p>
            </div>

            { renderMessages() }

            <div style={{ height: '100px' }} />

            <div className="message-form-container">
                <MessageForm { ...props } chatId={ activeChat } />
            </div>

        </div>
    );

};
