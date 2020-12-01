import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email="";
  pwd="";
  registeredUsers:any=[]
  constructor(private util:UtilityService, private router: Router) { }
  ngOnInit() {
    
  }
  login(){
    this.util.getLoginInfo(this.email,this.pwd)
      .subscribe(data => {
        console.log("data",data['token'])
        this.router.navigate(['/dashboard']);

      })
  }

}
