import { IonContent, IonHeader, IonLabel, IonList, IonItem, IonInput, IonToggle, IonPage, IonRadio, IonCheckbox, IonTitle, IonToolbar, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Stop: React.FC = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const today = new Date();
  const day = daysOfWeek[today.getDay()]
  const month = monthsOfYear[today.getMonth()]
  const date = today.getDate()
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
            <IonTitle size="large">STOP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel><h1>Stop</h1><p>- stop moving or operating</p></IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel><h1>Notice</h1><p>- observe or pay attention to something</p></IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem>
            <IonLabel><h1>Beware</h1><p>- Be cautious and alert to the dangers of</p></IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Stop;
