import { IonContent, IonHeader, IonLabel, IonList, IonItem, IonPage, IonCheckbox, IonTitle, IonToolbar } from '@ionic/react';
import TitleHeader from '../components/Title';
import CountDown from '../components/CountDown';

const Stop: React.FC = () => {
  //TODO: Track how many successful urges have occurred with month, day, year, counter
  // const [message, setMessage] = useState('')
  // const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  // const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  // const today = new Date();
  // const day = daysOfWeek[today.getDay()]
  // const month = monthsOfYear[today.getMonth()]
  // const date = today.getDate();

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
            <TitleHeader titleText="STOP" />
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>
              <h1>Stop</h1>
              <p>- stop moving or operating</p>
              <p>- do the above for <CountDown minutes={2} seconds={0} /> seconds</p>
            </IonLabel>
            <IonCheckbox slot="start" onClick={handleClick} />
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
