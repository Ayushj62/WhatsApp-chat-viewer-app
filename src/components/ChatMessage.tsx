import styled from '@emotion/styled';
import { format } from 'date-fns';
import type { Message } from '../types/chat';
import { BsEmojiSmile } from 'react-icons/bs';

const MessageContainer = styled.div<{ isOwnMessage: boolean }>`
    display: flex;
    justify-content: ${props => props.isOwnMessage ? 'flex-end' : 'flex-start'};
    margin: 2px 0;
    padding: 0 16px;
    position: relative;
`;

const MessageBubble = styled.div<{ isOwnMessage: boolean }>`
    max-width: 65%;
    padding: 6px 7px 8px 9px;
    border-radius: 7.5px;
    background-color: ${props => props.isOwnMessage ? '#e7ffdb' : 'white'};
    box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        ${props => props.isOwnMessage ? 'right: -8px' : 'left: -8px'};
        width: 8px;
        height: 13px;
        background-color: ${props => props.isOwnMessage ? '#e7ffdb' : 'white'};
        clip-path: ${props => props.isOwnMessage 
            ? 'polygon(0 0, 100% 0, 0 100%)'
            : 'polygon(0 0, 100% 100%, 100% 0)'};
    }
`;

const Sender = styled.div`
    font-size: 0.9em;
    color: #1f7aec;
    font-weight: 500;
    margin-bottom: 4px;
`;

const Content = styled.div`
    word-wrap: break-word;
    font-size: 14.2px;
    line-height: 19px;
    color: #111b21;
    white-space: pre-wrap;
`;

const Timestamp = styled.div`
    font-size: 11px;
    color: #667781;
    text-align: right;
    margin-top: 2px;
    float: right;
    margin-left: 8px;
    height: 15px;
    line-height: 15px;
`;

const MediaContent = styled.div`
    margin: 4px 0;
    position: relative;
    
    img {
        max-width: 330px;
        max-height: 330px;
        border-radius: 6px;
        display: block;
    }
    
    video {
        max-width: 330px;
        max-height: 330px;
        border-radius: 6px;
        background-color: #000;
    }
`;

const MediaOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 50%);
    border-radius: 6px;
    pointer-events: none;
`;

const Reactions = styled.div`
    display: flex;
    gap: 2px;
    position: absolute;
    right: 2px;
    bottom: -14px;
    z-index: 2;
`;

const Reaction = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 4px 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 2px;
    box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
    border: 1px solid #d9d9d9;
    
    svg {
        width: 13px;
        height: 13px;
        color: #667781;
    }
`;

interface ChatMessageProps {
    message: Message;
    currentUser: string;
}

export const ChatMessage = ({ message, currentUser }: ChatMessageProps) => {
    const isOwnMessage = message.sender === currentUser;
    const [time] = message.timestamp.split(',')[1].trim().split('.');
    const timestamp = format(new Date(`2000/01/01 ${time}`), 'HH:mm');

    const renderMedia = () => {
        if (!message.mediaUrl) return null;
        
        return (
            <MediaContent>
                {message.type === 'image' ? (
                    <>
                        <img src={message.mediaUrl} alt="Shared content" loading="lazy" />
                        <MediaOverlay />
                    </>
                ) : (
                    <video controls preload="none" poster={message.mediaUrl + '?poster=true'}>
                        <source src={message.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </MediaContent>
        );
    };

    return (
        <MessageContainer isOwnMessage={isOwnMessage}>
            <MessageBubble isOwnMessage={isOwnMessage}>
                {!isOwnMessage && <Sender>{message.sender}</Sender>}
                {message.type !== 'text' && renderMedia()}
                <Content>
                    {message.content}
                    <Timestamp>{timestamp}</Timestamp>
                </Content>
                {message.reactions && message.reactions.length > 0 && (
                    <Reactions>
                        {message.reactions.map((reaction, index) => (
                            <Reaction key={index}>
                                <BsEmojiSmile />
                                {reaction.emoji}
                            </Reaction>
                        ))}
                    </Reactions>
                )}
            </MessageBubble>
        </MessageContainer>
    );
};
