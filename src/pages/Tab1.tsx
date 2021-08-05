import { IonContent, IonHeader, IonLabel, IonList, IonItem, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar, IonText } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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
          <IonTitle>Daily Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Daily Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonRadioGroup>
            <IonListHeader>
              <IonLabel>Social Media</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>
                <IonText>
                  <p>9pm - 9am</p>
                </IonText>
                <IonText color="medium">
                  <h5>{`${day} ${month} ${date}`}</h5>
                </IonText>
              </IonLabel>
              <IonRadio slot="start" value="time" color="success" />
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonText>
                  <p>Specific purpose</p>
                </IonText>
                <IonText color="medium">
                  <h5>{`${day} ${month} ${date}`}</h5>
                </IonText>
              </IonLabel>
              <IonRadio slot="start" value="time" color="success" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
