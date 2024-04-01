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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi quidem ratione maxime facilis placeat repellat sapiente ipsa, quo, blanditiis molestiae cum incidunt? Soluta voluptas ipsum, quaerat dolores natus neque asperiores commodi est quisquam illo fugit similique ab molestiae! Consectetur tempora illo provident corrupti reprehenderit ratione earum animi voluptatum dolorem asperiores eum nostrum harum veniam, doloribus, ad, cum rem vitae hic minima incidunt nihil. Consectetur nesciunt repellat veritatis natus facere, reprehenderit delectus ipsa voluptatem qui fuga suscipit nostrum quae. Debitis.</p>
          <p>Start exploring now!</p>
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
