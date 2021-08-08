import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader } from '@ionic/react';
import TitleHeader from '../components/Title';
import ListItem from '../components/ListItem';
import CountDown from '../components/CountDown';

const Tab3: React.FC = () => {
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
            <TitleHeader titleText="BREATHE" />
          </IonToolbar>
        </IonHeader>
        <IonList>
          <ListItem actionWord="BREATHE" actionDetail="Inhale and Exhale, 3-5 min deep breaths" actionDetail2="Ex. Breathe into tightness of chest" />
          <IonListHeader>
            <CountDown minutes={5} seconds={0} />
          </IonListHeader>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
