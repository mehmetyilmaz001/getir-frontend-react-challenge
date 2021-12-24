import { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../style/Theme';

const Container =  styled.div`
    border-radius: ${theme.borderRadius};
    ${theme.shadow.elevation1};
    padding: ${theme.spacing(6)};
    background-color: ${theme.color.white}; 
`

const Title = styled.span`
    display: inline-block;
    margin-bottom: ${theme.spacing(3)};
    font-weight: 600;
    font-size: 13px;
    color: ${theme.palette.text.tertiary};
`

interface CardProps {
    title?: string;
}
 
const Card: FunctionComponent<CardProps> = ({children, title}) => {
    return (
        
        <div>
            {title && <Title>{title}</Title>}
            <Container>
                {children}
            </Container>
        </div>
     );
}
 
export default Card;

