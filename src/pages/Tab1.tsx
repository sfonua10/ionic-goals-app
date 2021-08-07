import { useState } from 'react'
import styled from 'styled-components'
import { IonContent, IonHeader, IonLabel, IonList, IonItem, IonInput, IonToggle, IonPage, IonRadio, IonCheckbox, IonTitle, IonToolbar, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Stop: React.FC = () => {
  const IonStyledTitle = styled(IonTitle)`
    text-align: center;
  `;
  
  const [message, setMessage] = useState('')
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const today = new Date();
  const day = daysOfWeek[today.getDay()]
  const month = monthsOfYear[today.getMonth()]
  const date = today.getDate();

  const handleClick = (e: any) => {
    console.log(e, 'sup playah!')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Process Urges</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonStyledTitle size="large">STOP</IonStyledTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>
              <h1>Stop</h1>
              <p>- stop moving or operating</p>
              <p>- do the above for 2 minutes</p>
            </IonLabel>
            <IonCheckbox slot="start" onClick={handleClick}/>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h1>Notice</h1>
              <p>- observe or pay attention to something</p>
              <p>- sit on highway and watch feelings go by</p>
            </IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h1>Beware</h1>
              <p>- Be cautious and alert to the dangers of</p></IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h1>Remember</h1>
              <p>- Regret, sorrow, guilt from breaking rules</p>
              <p>- My time in jail (bondage, captivity)</p>
              <p>- Hong, Via, Isaac</p>
              <p>- Freedom from guilt</p>
              <p>- Peace of conscience</p>
            </IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stop;
