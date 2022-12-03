import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

myimage:string = "assets/Images/ItalianRestaurant.jpg";
homepage: any;


ngOnInit(): void {
  throw new Error('Method not implemented.');
}
menu: any;

}