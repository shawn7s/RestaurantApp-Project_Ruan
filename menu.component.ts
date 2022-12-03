import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

import { menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menu: menu[] = [];
myimage1: string;
myimage2: string;
myimage3: string;

  constructor(private menuService: MenuService) {
    this.myimage1 = "/assets/Images/chickenparmpizza.jpg";
    this.myimage2 = "/assets/Images/pinkmoscato.png";
    this.myimage3 = "/assets/Images/spaghettimeatballs.jpg";
  }
  ngOnInit(): void {
      this.getMenu()

  getmenu(); void {


  }
  }
  getMenu() {
    throw new Error('Method not implemented.');
  }

}
function getmenu() {
  throw new Error('Method not implemented.');
}

