import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'todo';

  ngOnInit(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyA0HNhlxwik8WVBLceKIGSefBkAQCj7IQA",
        authDomain: "tasks-d49c7.firebaseapp.com",
        databaseURL: "https://tasks-d49c7.firebaseio.com",
        projectId: "tasks-d49c7",
        storageBucket: "tasks-d49c7.appspot.com",
        messagingSenderId: "346469576508",
        appId: "1:346469576508:web:a50fc1b5330025054e7839",
        measurementId: "G-Y2DH6Y0NEK"
      }
    )
  }
}
