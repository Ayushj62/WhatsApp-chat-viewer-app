import { useState } from 'react'
import { FileInput } from './components/FileInput'
import { ChatContainer } from './components/ChatContainer'
import type { ChatData } from './types/chat'
import { parseWhatsAppChat } from './utils/chatParser'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
`

function App() {
  const [chatData, setChatData] = useState<ChatData | null>(null)

  const handleFileSelect = (content: string) => {
    console.log('File content:', content.slice(0, 200)) // Show first 200 chars
    const parsedChat = parseWhatsAppChat(content)
    console.log('Parsed chat data:', parsedChat)
    setChatData(parsedChat)
  }

  return (
    <AppContainer>
      {!chatData ? (
        <FileInput onFileSelect={handleFileSelect} />
      ) : (
        <ChatContainer chatData={chatData} />
      )}
    </AppContainer>
  )
}

export default App
