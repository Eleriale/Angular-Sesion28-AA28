import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public autenticacion: AutenticacionService, public router: Router ) { }

  username: string = "";
  password: string = "";
  redireccion = '';
  mostrar: boolean = false;
  botonDeshabilitado = false;

  Login() {
    
     if(this.autenticacion.login(this.username,this.password)){
      this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder; 
      this.autenticacion.urlUsuarioIntentaAcceder = '';
       this.router.navigate(['/home']);
       this.botonDeshabilitado = true;
    }
    else{this.mostrar = true} 
    
  }
}

