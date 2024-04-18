import React from 'react';
import {IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
  import { IonRouterLink } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <h2>Welcome to My Ionic App</h2>
          <p>Greetings and welcome to My Ionic App! We're thrilled to have you join our community of users who are embarking on an exciting journey of my app offers. At My Ionic App, we're dedicated to providing an exceptional experience tailored just for you. Whether you're here to mention primary purpose or benefit of the app, another key feature or benefit, or another aspect of the app, we're here to guide you every step of the way. Our team has poured their passion and expertise into crafting My Ionic App  to be not just another app, but a trusted companion in your daily life. We're committed to making your experience seamless and enjoyable. So, what are you waiting for? Dive in, explore, and discover all that My Ionic App has to offer. Whether you're a seasoned pro or a newcomer, there's something here for everyone.
</p>
        </div>
        <IonCard>
      <IonCardHeader>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
        <IonRouterLink href="/Click_counter">
              <IonItem>
                  <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src="https://img.freepik.com/free-vector/illustration-touch-screen-hand-gesture_53876-5607.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1713225600&semt=ais" />
                  </IonThumbnail>
                  <IonLabel>Click Counter</IonLabel>
              </IonItem>
                </IonRouterLink>
              
              <IonRouterLink href="/Calculator">
              <IonItem>
                <IonThumbnail slot="start">
                    <img id="img" alt="Silhouette of mountains" src="https://i.pinimg.com/564x/e8/be/5e/e8be5e46a90ac4a8dff3a1ecc9bbf16f.jpg" />
                  </IonThumbnail>
                  <IonLabel>Calculator</IonLabel>
              </IonItem>
                </IonRouterLink>
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Blank</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Blank</IonLabel>
              </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
