import styled from '@emotion/styled';
import type { ChatData, Message } from '../types/chat';
import { ChatMessage } from './ChatMessage';
import { DateSeparator } from './DateSeparator';
import { useRef, useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;    position: relative;
    background-color: #efeae2;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVHcEzx8fHw8PDx8fHx8fHx8fHx8fHw8PDx8fGFe0pZAAAACHRSTlMABTf75MPQ6/7RT9AAAABsSURBVDjL7c2xDYAwDEVRoxQZICUTZKRUGSMjsP+EmOJL/AW4OJXvSk+2j05ek15PZF/r9qC1tZHqx7VrbYxQH0NrbTxw3dlw3U1wvYBwbaVwY0psgLHGGGOMMcYYY4wxxhhjjDHGGPP/zAM2ThpN5V/xnwAAAABJRU5ErkJggg==");
    background-repeat: repeat;
`;

const Header = styled.div`
    background-color: #f0f2f5;
    color: #111b21;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 59px;
    border-left: 1px solid #e9edef;
`;

const ChatProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
`;

const ProfilePicture = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #dfe5e7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #54656f;
    font-size: 16px;
`;

const ChatInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #111b21;
`;

const Subtitle = styled.div`
    font-size: 13px;
    color: #667781;
`;

const ChatArea = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px 6% 8px;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #374045;
        border-radius: 3px;
        opacity: 0.13;
    }
    
    > div {
        animation: fadeIn 0.2s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

interface ChatContainerProps {
    chatData: ChatData;
}

export const ChatContainer = ({ chatData }: ChatContainerProps) => {
    const chatAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [chatData.messages]);

    // Assuming the last participant in the list is the current user
    const currentUser = chatData.participants[chatData.participants.length - 1];

    return (
        <Container>            <Header>
                <ChatProfile>
                    <ProfilePicture>
                        {chatData.title[0].toUpperCase()}
                    </ProfilePicture>
                    <ChatInfo>
                        <Title>{chatData.title}</Title>
                        <Subtitle>
                            {chatData.participants.length} participants
                        </Subtitle>
                    </ChatInfo>
                </ChatProfile>
            </Header><ChatArea ref={chatAreaRef}>
                {chatData.messages.length > 0 ? (
                    <>
                        {chatData.messages.map((message: Message, index: number) => {
                            const currentDate = message.timestamp.split(',')[0];
                            const showDateSeparator = index === 0 || 
                                currentDate !== chatData.messages[index - 1].timestamp.split(',')[0];

                            return (
                                <div key={message.id}>
                                    {showDateSeparator && (
                                        <DateSeparator date={message.timestamp} />
                                    )}
                                    <ChatMessage
                                        message={message}
                                        currentUser={currentUser}
                                    />
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <div style={{ 
                        textAlign: 'center', 
                        padding: '20px', 
                        color: '#667781' 
                    }}>
                        No messages found in the chat file. Make sure you've selected a valid WhatsApp chat export.
                    </div>
                )}
            </ChatArea>
        </Container>
    );
};
