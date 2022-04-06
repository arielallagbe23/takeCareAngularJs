import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomeview',
  templateUrl: './welcomeview.component.html',
  styleUrls: ['./welcomeview.component.css']
})
export class WelcomeviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimage:string = "assets/images/lapharmacienne.jpeg"
  myimage2:string = "assets/images/soumettreuneordonnance.jpg"
  myimage3:string = "assets/images/prendrerendezvous.jpg"

}
