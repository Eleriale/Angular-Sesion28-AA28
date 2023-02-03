import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  

  constructor() { }
  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login(username: string, password: string) {
 
    if (username === 'AD' && password === '12345678')
    {
      localStorage.setItem(this.ISLOGGEDKEY, 'true');
      this.changeLoginStatusSubject.next(true);
      return true;
    }
     else if(username === 'Dkli' && password === 'lilian123'){
        localStorage.setItem(this.ISLOGGEDKEY, 'true');
        this.changeLoginStatusSubject.next(true);
      return true;
    } 
    
      else if(username === 'Silvi' && password === 'silvi456'){  
      localStorage.setItem(this.ISLOGGEDKEY, 'true');
      this.changeLoginStatusSubject.next(true);
      return true;} 
      else{
        return false;
      }
  }    
  
logout() {
localStorage.removeItem(this.ISLOGGEDKEY);
this.changeLoginStatusSubject.next(false);
}

isLoggedIn(url: string) {
const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
if (!isLogged) {
this.urlUsuarioIntentaAcceder = url;
return false;
}
return true;
}
}
