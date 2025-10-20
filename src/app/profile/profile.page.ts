import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonInputPasswordToggle, IonImg, IonButton, IonAlert, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonInputPasswordToggle,
    IonImg,
    IonButton,
    IonAlert,
    IonContent,
    IonIcon
]
})
export class ProfilePage implements OnInit {

  alertButtons = ['Action']
  
  constructor() { }

  ngOnInit() {
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }  

}
