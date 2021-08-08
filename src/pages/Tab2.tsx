import { IonContent, IonHeader, IonListHeader, IonList, IonItem, IonInput, IonToggle, IonPage, IonRadio, IonCheckbox, IonTitle, IonToolbar, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import TitleHeader from '../components/Title';
import ListItem from '../components/ListItem';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

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
          <TitleHeader titleText="DROP" />
          </IonToolbar>
        </IonHeader>
        <IonList>
          <ListItem actionWord="GO" actionDetail="Be 100% present inside body." />
          <IonListHeader>What does it feel like in my body?</IonListHeader>
          <ListItem actionWord="WHERE" actionDetail="Chest, shoulders, neck, etc?" actionDetail2="Ex. Warmth in my head, chest feels tight"/>
          <ListItem actionWord="SPEED" actionDetail="Fast or slow?" actionDetail2="Ex. Fast heartbeat" />
          <ListItem actionWord="SUBSTANCE" actionDetail="Hard or soft?" actionDetail2="Ex. Tingling in hands and face" />
          <ListItem actionWord="COLOR" actionDetail="Give the emotion a color" actionDetail2="Ex. it looks red/orange" />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
