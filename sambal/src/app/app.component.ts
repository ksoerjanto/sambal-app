import { Component } from '@angular/core';
import { FirebaseApp, getApp } from '@angular/fire/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Full Spread';
  daisies: [number, number][] = [];

  constructor(private app: FirebaseApp) {
    this.app = getApp();
  }

  ngOnInit(): void {
    this.generateDaisies();
  }

  signInClicked(): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(this.app), provider)
        .then((result) => console.log('Signin successful'))
        .catch((error) => console.log(`Signin unsuccessful: ${error}`));
  }

  generateDaisies() {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const numDaisies = this.calculateNumberDaisies(winHeight, winWidth);

    for ( var i=0; i < numDaisies; i++ ) {        
      let randomTop = this.getRandomNumber(0, winHeight);
      let randomLeft = this.getRandomNumber(0, winWidth);
        
      this.daisies.push([randomTop, randomLeft]);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  calculateNumberDaisies(windowHeight: number, windowWidth: number): number {
    return Math.floor(windowHeight*windowWidth/80000);
  }
}
