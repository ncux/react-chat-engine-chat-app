
export const Outgoing = ({ message }) => {

    if(message?.attachments?.length > 0) {
        return (
                <img
                    src={ message.attachments[0].file }
                    alt={`image`}
                    className="message-image"
                    style={{ marginLeft: 'auto' }}
                />
        );
    }

    return (
        <div style={{ marginLeft: 'auto', marginRight: '18px', color: '#ffffff', backgroundColor: '#3b2a50' }} className="message">
            { message?.text }
        </div>
    );

};
