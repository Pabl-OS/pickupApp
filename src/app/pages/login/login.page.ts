import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  // login = new FormControl('');
  constructor(private authS : AuthService) { }

  ngOnInit() {
    // this.authS.onLogin()
    //                   .subscribe(resp=>console.log(resp));
      
    
  }

}
