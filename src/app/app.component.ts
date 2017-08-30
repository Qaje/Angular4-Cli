import { Component } from '@angular/core';
declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web  de Angular 4 con Angular CLI corriendo app !!';

  public toggleTitle(){
	  console.log('Le has dado click en el boton');
	  //usar JQUERY
	  $('.title').slideToggle();
  }
}
