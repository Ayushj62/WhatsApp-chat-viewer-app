import styled from '@emotion/styled';
import { format } from 'date-fns';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
    position: relative;
`;

const DateBadge = styled.div`
    background-color: #E1F2FA;
    color: #54656F;
    font-size: 0.75rem;
    padding: 6px 12px;
    border-radius: 8px;
    box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
`;

interface DateSeparatorProps {
    date: string;
}

export const DateSeparator = ({ date }: DateSeparatorProps) => {
    const formattedDate = format(new Date(date), 'MMMM d, yyyy');
    
    return (
        <Container>
            <DateBadge>{formattedDate}</DateBadge>
        </Container>
    );
};
