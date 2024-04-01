import React from 'react';
import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonList, IonFooter, IonButton, IonIcon} from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/327207988_1583626385448198_3267979529570872045_n.jpg?stp=dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-tbZcWIh3g1leCClrA3-E7RLfLIQ1xnntEt8shDXGeVkhViC4JjvRN6wWpqqTPLuVNHLJpOM-NFg85bzF8IDv&_nc_ohc=W9HtyQxCQSMAX-I-LJZ&_nc_ht=scontent.fmnl7-1.fna&oh=00_AfDX2PN5VNVQCGCy_vuE0N0uTz1X-GhYf30aw9dRiPKwag&oe=6609536F" />
            </IonAvatar>
            <IonLabel>
              <h2>Marianne Gil Estrada</h2>
              <p>Application Developer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h3>About Me</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sequi porro animi pariatur earum dolorum iure quis non repellat? Porro ducimus in explicabo corporis reiciendis cupiditate minima eveniet a harum. Voluptatibus blanditiis in dolores odit ratione amet explicabo repellendus asperiores suscipit a iusto ut facere expedita ea distinctio placeat, possimus vitae dignissimos quia. Officia illum temporibus itaque minima! Quos quaerat, officiis quis rerum ea amet. In natus esse cum vitae voluptatem, dolor quae? Eveniet eius, excepturi beatae quasi magni officia. Nemo repellendus odit nihil optio blanditiis aspernatur voluptate cum.</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
