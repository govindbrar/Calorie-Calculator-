import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomePage {
 height: number; 
 weight: number;
 age: number;
 dci: number;
 bmr: number;
 sex: string;
 exercise: string;


dciMessage: string;
  constructor(public navCtrl: NavController) {

  }
calculateDCI(){
    if (this.sex == "m") {
      this.bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
    }else if (this.sex == "f") {
      this.bmr =(10 *this.weight + 6.25 *this.height - 5 *this.age - 161);
    }else {
       this.bmr = 0;
     }
     
    if (this.exercise == "1") {
      this.dci = Math.round(this.bmr * 1.2);
      this.dciMessage = "kcal/day";
    }else if (this.exercise == "2") {
      this.dci = Math.round(this.bmr * 1.4);
      this.dciMessage = "kcal/day";
    }else if (this.exercise == "3") {
      this.dci = Math.round(this.bmr * 1.6);
      this.dciMessage = "kcal/day";
    }else if (this.exercise == "4") {
      this.dci = Math.round(this.bmr * 1.75);
      this.dciMessage = "kcal/day";
    }else if (this.exercise == "5") {
      this.dci = Math.round(this.bmr * 2.0);
      this.dciMessage = "kcal/day";
    }else if (this.exercise == "2") {
      this.dci = Math.round(this.bmr * 2.3);
      this.dciMessage = "kcal/day";
    }else {
      this.dci=0 ; 
    }

    }
}

