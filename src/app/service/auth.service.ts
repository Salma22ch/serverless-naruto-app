import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Registration success!', value);
      })
      .catch(err => {
        console.log('error:',err.message);
      });
  }
  signInWithGoogle(){
  return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
 FacebookAuth() {
    return this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  } 

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login success');
      })
      .catch(err => {
        console.log('error:',err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }
}
