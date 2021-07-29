import { DBService } from './../db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   courses;
   constructor(dbservice : DBService) {
     this.courses = dbservice.getAll();
   }

   /* ---------------------------- Property Binding ---------------------------- */
   courseTitle ="Angular 12";
   courseName = "Ang By Ahmed Rabie";
   imgUrl = "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png";

   /* ------------------------------ Class Binding ----------------------------- */
   isActive=false;
   
   /* ------------------------ Method for Event Binding ------------------------ */
   methodName(): any {
        alert("welcome to Event Binding")
   }

   /* ------------------------------ Event Filter ------------------------------ */
    /* --------------------------- Template Variables --------------------------- */
    nameVal : any;
   onKeyPress(firstName:any):any {
         /* ------------------- this.nameVal = $event.target.value; ------------------ */
           this.nameVal = firstName.value;
   }

  
   
}









  /* ----------------------------- Test Directives ---------------------------- */
  /* ------- courses : string [] = ['C#','Java','JavaScript','Python']; ------- */

