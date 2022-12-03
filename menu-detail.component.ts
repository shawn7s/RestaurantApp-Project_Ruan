import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { menu } from '../menu';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  menu: any;
  route: any;
  menuService: any;
  location: any;

  constructor() {}

  ngOnInit(): void {
    this.getMenu();
}
  getMenu() {
    const id = Number(this.route.snapshot.paraMap.get('id'));
    this.menuService.getMenu(id)
      .subscribe((menu: menu | undefined) => this.menu = menu);
  }

  goback(): void {
    this.location.back();
  }
}
