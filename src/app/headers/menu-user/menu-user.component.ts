import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../paginas/login/services/login.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService : LoginService) { 
    
  }

  ngOnInit() {
  }

  logoff(){
    this.loginService.removeToken();
    this.router.navigate(['/home']);
  }

}
