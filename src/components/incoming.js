
export const Incoming = ({ message, lastMessage }) => {

    const is1stMessageByUser = !lastMessage || lastMessage?.sender?.username !== message?.sender?.username;

    return (
        <div className="message-row">
            {
                is1stMessageByUser ? (
                    <div
                        className="message-avatar"
                        style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                    />
                ) : null
            }
            {
                message?.attachments?.length > 0 ? (
                    <img
                        src={ message.attachments[0].file }
                        alt={`image`}
                        className="message-image"
                        style={{ marginLeft: is1stMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div style={{ marginRight: 'auto', marginLeft: is1stMessageByUser ? '4px' : '48px', backgroundColor: '#cabcdc' }} className="message">
                        { message?.text }
                    </div>
                )
            }
        </div>
    );

};
