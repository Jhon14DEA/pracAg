import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login();
  }
  logOut(){
    this.auth.logout();    
  }
  async login3(){
    let login = await this.auth.login3();
    if(login){
      console.log("SI")
      this.router.navigate(['products/list']) 
    }else{
      console.log("NO")
      alert("No Login")
    }
  }
}
