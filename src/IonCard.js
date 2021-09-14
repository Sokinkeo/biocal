import React, { useState } from 'react';
import {play,wifi,warning} from 'ionicons/icons';
import {IonApp, IonButton, IonContent, 
  IonHeader, IonIcon, IonInput, IonLabel, 
  IonText, IonTitle, IonToolbar,IonItem, IonDatetime, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg} from '@ionic/react';


function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
        <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      <div>
      <IonCard color="primary">
        <IonCardHeader>
          <IonImg src="https://cdn.pixabay.com/photo/2016/04/01/10/46/face-1300021_1280.png"/>
          <IonCardTitle>Some Student</IonCardTitle>
          <IonCardSubtitle>IT Student</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Say hello to newly created card for student.</IonCardContent>
      </IonCard>
      </div>
      <IonCard color="primary">
        <IonItem>
          <IonIcon icon={wifi} slot="start"/>
          <IonLabel>Wifi</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={warning} slot="start"/>
          <IonLabel>Careful</IonLabel>
        </IonItem>
      </IonCard>
    </IonContent>
  </IonApp>
  );
}

export default App;
