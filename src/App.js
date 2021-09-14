import React, { useState } from 'react';
import {IonApp, IonContent, 
  IonHeader, IonInput, IonLabel, 
  IonText, IonTitle, IonToolbar,IonItem, IonDatetime} from '@ionic/react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hook';
import BiorhythmChart from './components/BiorhythmChart';
//hi
function App() {
  const targetDate = new Date().toISOString();
  const [name,setName]=useState("Your name");
  const [bdate,setbDate]=useLocalStorage("birthday","");
  const [tdate,settDate]=useState(targetDate);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
        <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
        <BiorhythmCard birthDate={bdate} targetDate={tdate}/>
        <IonItem>
          <IonLabel position="float">Name:</IonLabel>
          <IonInput type="text"  value={name}
            onIonChange={(event)=> setName(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="float">Last Name:</IonLabel>
          <IonInput type="text"/>
        </IonItem>
        <IonItem>
          <IonLabel position="float">Password:</IonLabel>
          <IonInput type="password"/>
        </IonItem>
        <IonItem>
          <IonLabel position="float">Email:</IonLabel>
          <IonInput type="email"/>
        </IonItem>

        <IonItem>
          <IonText>Birthdate: </IonText>
          <IonDatetime displayFormat="DD MMM YYYY" value={bdate}
            onIonChange={(event)=>setbDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonText>Targetdate: </IonText>
          <IonDatetime displayFormat="DD MMM YYYY" value={tdate}
            onIonChange={(event)=>settDate(event.detail.value)}
          />
        </IonItem>


    </IonContent>
  </IonApp>
  );
}

export default App;
