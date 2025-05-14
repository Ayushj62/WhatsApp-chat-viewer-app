import type { ChatData, Message } from '../types/chat';
import { v4 as uuidv4 } from 'uuid';

export const parseWhatsAppChat = (content: string): ChatData => {
    console.log('Starting to parse chat content...');
    const lines = content.split('\n');
    console.log(`Found ${lines.length} lines in chat`);
    const messages: Message[] = [];
    const participants = new Set<string>();

    // Support multiple date formats and optional AM/PM
    const messageRegex = /\[?(\d{1,2}\/\d{1,2}\/\d{2,4}(?:,|\s+)\s*\d{1,2}:\d{2}(?::\d{2})?(?:\s*[AaPp][Mm])?)\]?\s*([^:]+):\s*(.+)/;    lines.forEach((line, index) => {
        if (!line.trim()) return; // Skip empty lines
        
        const match = line.match(messageRegex);
        if (match) {
            const [, timestamp, sender, content] = match;
            console.log(`Line ${index + 1}: Found message from ${sender}`);
            
            // Determine message type
            let type: 'text' | 'image' | 'video' = 'text';
            let mediaUrl: string | undefined;
            
            if (content.includes('<attached: ')) {
                if (content.toLowerCase().match(/\.(jpg|jpeg|png|gif)>/i)) {
                    type = 'image';
                    mediaUrl = content.match(/<attached: (.+)>/)?.[1];
                } else if (content.toLowerCase().match(/\.(mp4|mov|avi)>/i)) {
                    type = 'video';
                    mediaUrl = content.match(/<attached: (.+)>/)?.[1];
                }
            }            participants.add(sender);
            messages.push({
                id: uuidv4(),
                sender,
                content: content.replace(/<attached: .+>/g, '').trim(),
                timestamp,
                type,
                mediaUrl,
                reactions: []
            });
        } else {
            console.log(`Line ${index + 1}: Could not parse message format:`, line);
        }
    });
    
    console.log(`Parsed ${messages.length} messages from ${participants.size} participants`);

    return {
        participants: Array.from(participants),
        messages,
        title: 'WhatsApp Chat',
        exportDate: new Date().toISOString()
    };
};
