import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuariologueado = false;
  
  constructor( public autentication: AutenticacionService) {}
    
  ngOnInit(){
    this.usuariologueado = this.autentication.isLoggedIn('');
    this.autentication.changeLoginStatus$.subscribe(
    (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
    }
  

 
  logout(){
    this.autentication.logout();
  }

}
