import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenavContainer } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('snav') sideNav: MatSidenav;
  constructor() { }

  ngOnInit() {
  }

  abreMenuLateral(tp : Boolean){
    this.sideNav.toggle();
  }

}
