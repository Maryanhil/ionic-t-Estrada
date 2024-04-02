import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
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
          <h2>Welcome to My App</h2>
          <p>Greetings and welcome to My App! We're thrilled to have you join our community of users who are embarking on an exciting journey of my app offers.
At My App, we're dedicated to providing an exceptional experience tailored just for you. Whether you're here to mention primary purpose or benefit of the app, another key feature or benefit, or another aspect of the app, we're here to guide you every step of the way.
Our team has poured their passion and expertise into crafting My App Name to be not just another app, but a trusted companion in your daily life. We're committed to making your experience seamless and enjoyable.
So, what are you waiting for? Dive in, explore, and discover all that My App has to offer. Whether you're a seasoned pro or a newcomer, there's something here for everyone.
</p>
        </div>
        <IonButton id="present-alert">explore now!</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Explore"
        subHeader="Sorry Page Is Not Available Yet"
        message="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi quidem ratione maxime facilis placeat repellat sapiente ipsa"
        buttons={['Ok']}
      ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Home;
