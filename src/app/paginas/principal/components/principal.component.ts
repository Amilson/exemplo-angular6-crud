import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from '../services/principal.service';

import { Login } from '../../login/models/login';

import {MediaMatcher} from '@angular/cdk/layout';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @ViewChild('snav') sideNav: MatSidenav;
  public showMenu: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(){
    
  }

  abreMenuLateral(tp : Boolean){
    this.sideNav.toggle();
  }

  abreClientes(tp : string){
    this.sideNav.toggle();
    this.router.navigate(["principal","clientes-"+tp]);
  }
  
  abreDeclaracao(tp : string){
    this.sideNav.toggle();
    this.router.navigate(["principal","declaracao-"+tp]);
  }

}
