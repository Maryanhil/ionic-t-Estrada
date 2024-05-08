import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Click_Counter.css';

const Tab2: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <IonPage>
      <IonHeader>
      <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="counter-content">
        <div className="counter-container">
          <h1>Click Counter</h1>
          <p>Total Clicks: {count}</p>
          <IonButton onClick={incrementCounter}>Click me!</IonButton>
        </div>
      </IonContent>

    </IonPage>
  );
};

export default Tab2;
