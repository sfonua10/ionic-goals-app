import { IonTitle } from '@ionic/react';
import styled from 'styled-components';

const TitleHeader: React.FC<any> = ({ titleText }) => {

    const IonStyledTitle = styled(IonTitle)`
        display: flex;
        text-align: center;
    `;
    
    return (
        <IonStyledTitle size="large">{titleText}</IonStyledTitle>
    )
}

export default TitleHeader;