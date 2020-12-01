import { Component } from '@angular/core';
import { UtilityService } from './shared/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private util:UtilityService,  private router: Router){
this.router.navigate(['/login']);
}
  

    
}
