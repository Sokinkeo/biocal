import React, { useState } from 'react';
import {IonApp, IonContent, 
  IonHeader, IonInput, IonLabel, 
  IonText, IonTitle, IonToolbar,IonItem, IonDatetime, IonButton} from '@ionic/react';


function App() {
  const [name,setName]=useState("Your name");
  return (
    <IonApp>
      <IonButton>-</IonButton><IonButton>+</IonButton>
  </IonApp>
  );
}

export default App;
