import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore
    ) { 
      this.auth.authState.subscribe((user) => {
        console.log(user);
        if (user) {
          localStorage.setItem("SI USUARIO", "true")
        } else {
          localStorage.setItem("NO USUARIO", "false")
        }
      });
    } 

  login(){
        // para darle despues de sign...la forma para logearse con fb, gmail numero de telefono o credential para cuando antes se hace un registro  o el 
    // ara el emailandpassword es para dar la funcionalidad de que el usuario previamente se registre.
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(credential =>{
      console.log(credential)
      this.updateUserData(credential.user)
    }).catch(error => {
      console.log(error)
    });
  }

  logout(){
    this.auth.signOut();
  }

  isLoggedIn(){
    if(localStorage.getItem("login") == "true")
      return true;
    return false;
  }

  async updateUserData(user: any){
    let usersCollection = this.afs.collection<any>('users');
    const providerData = user?.providerData[0]
    let data = {
      uid: user?.uid,
      displayName: providerData.displayName,
      email: providerData.email,
      // || es O cuando es definido o no sinohayel valor del numero guarde al ''
      phoneNumber: providerData.phoneNumber || '',
      providerId: providerData.providerId,
      photoURL: providerData.photoURL
    }
    usersCollection.doc(user.uid).set(data);
  }

  login3() {
    return new Promise(async (resolve, reject) => {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(credential => {
          console.log(credential)
          console.log(credential.user)
          this.updateUserData(credential.user)
          resolve(true)
      }).catch(()=> {
          resolve(false)
      });
    });
  }
}
