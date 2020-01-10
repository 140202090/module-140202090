import { Component } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public afAuth: AngularFireAuth ) { }

    signout() {
        this.afAuth.auth.signOut().then(() => {
            location.reload();

        });

    }
}
