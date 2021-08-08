import { IonLabel, IonItem, IonCheckbox } from '@ionic/react';

interface ListItemProps {
    actionWord: string;
    actionDetail?: string;
    actionDetail2?: string;
}

const ListItem = ({ actionWord, actionDetail, actionDetail2}: ListItemProps) => {
    return(
        <IonItem>
        <IonLabel>
          <h1>{actionWord}</h1>
          <p>{`-${actionDetail}`}</p>
          {actionDetail2 && <p>{`-${actionDetail2}`}</p>}
        </IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    )
}

export default ListItem;