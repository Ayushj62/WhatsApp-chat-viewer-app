export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
    type: 'text' | 'image' | 'video';
    mediaUrl?: string;
    reactions?: Reaction[];
}

export interface Reaction {
    emoji: string;
    userId: string;
    username: string;
}

export interface ChatData {
    participants: string[];
    messages: Message[];
    title: string;
    exportDate: string;
}
