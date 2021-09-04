import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }
   options_menu =[
      
       {
       title : "menu" ,
       path : "/menu",
       icon:"home"
       },
       {
       title : "ordenes" ,
       path : "/orders",
       icon:"clipboard"
       },
       {
       title : "Acerda de" ,
       path : "/about",
       icon:"help"
       },
       {
       title : "Ajustes" ,
       path : "/modal",
       icon:"settings"
       }
       
     
   ];
  ngOnInit() {}

}
