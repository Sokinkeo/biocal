import React from 'react';
import dayjs from 'dayjs';
import {IonTitle, IonCard, IonCardHeader, IonCardContent} from '@ionic/react';
import {calculateBiorhythms} from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

function formatDate(isoString){
    return dayjs(isoString).format('DD MMM YYYY');
    }
function BiorhythmCard({birthDate,targetDate}){
    const {Physical, Emotional, Intellectual}=calculateBiorhythms(birthDate,targetDate);
    return (
        <IonCard className="Biorhythm-card ion-text-center">
            <IonCardHeader>        
                <IonTitle>{formatDate(targetDate)}</IonTitle>
            </IonCardHeader>

                <IonCardContent>
                <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
                    <p className="physical">Physical: {Physical.toFixed(4)}</p>
                    <p className="emotional">Emotional: {Emotional.toFixed(4)}</p>
                    <p className="intellectual">Intellectual: {Intellectual.toFixed(4)}</p>
                </IonCardContent>
        </IonCard>
    )

}
export default BiorhythmCard;