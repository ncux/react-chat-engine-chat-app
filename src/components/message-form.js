import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

export const MessageForm = (props) => {

    const { chatId, creds } = props;

    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
        isTyping(props, chatId);
    };

    const upload = event => sendMessage(creds, chatId, { files: event.target.files, text: '' });

    const send = e => {
        e.preventDefault();
        if(text) {
            sendMessage(creds, chatId, { text: text?.trim() });
        }
        setText('');
    };

    return (
        <form onSubmit={ send } className="message-form">
            <input
                type="text"
                value={ text }
                onChange={ onChange }
                className="message-input"
                placeholder={`Type message`}
                onSubmit={ send }
            />

            <label htmlFor="upload-button">
                <span className="image-button"><PictureOutlined className="picture-icon" /></span>
            </label>
            <input
                id="upload-button"
                type="file"
                multiple={ false }
                value={ text }
                onChange={ upload.bind(this) }
                style={{ display: 'none' }}
            />
            <button type="submit" className="send-button"><SendOutlined className="send-icon" /></button>
        </form>
    );

};
