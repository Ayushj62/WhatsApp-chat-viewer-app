import type { ChangeEvent } from 'react';
import styled from '@emotion/styled';

const FileInputContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f2f5;
    margin-bottom: 20px;
    text-align: center;
`;

const StyledLabel = styled.label`
    display: inline-block;
    padding: 12px 24px;
    background-color: #00a884;
    color: white;
    border-radius: 24px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #008f6f;
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

interface FileInputProps {
    onFileSelect: (content: string) => void;
}

export const FileInput = ({ onFileSelect }: FileInputProps) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            if (content) {
                onFileSelect(content);
            }
        };
        reader.readAsText(file);
    };

    return (
        <FileInputContainer>
            <StyledLabel>
                Upload WhatsApp Chat Export
                <HiddenInput
                    type="file"
                    accept=".txt"
                    onChange={handleFileChange}
                />
            </StyledLabel>
        </FileInputContainer>
    );
};
