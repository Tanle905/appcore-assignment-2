import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = ''
  password:string = ''
  constructor(private authService:AuthService, private route:Router) { }
  onLogin(){
    this.authService.loginDetail = [this.username, this.password]
    this.route.navigate(['/user'])
  }
  ngOnInit(): void {
  }

}