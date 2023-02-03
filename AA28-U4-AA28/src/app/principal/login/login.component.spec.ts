import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AutenticacionService } from '../../services/autenticacion.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let autenticacionService: AutenticacionService;
  let router: Router;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,MatFormFieldModule,RouterTestingModule,MatInputModule,MatButtonModule,BrowserAnimationsModule],
      providers: [ AutenticacionService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    autenticacionService = TestBed.get(AutenticacionService);
    router = TestBed.get(Router);
    component = new LoginComponent(autenticacionService, router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call autenticacionService.login method with correct parameters on Login', () => {
    const spy = jest.spyOn(autenticacionService, 'login').mockReturnValue(true);
    component.username = 'AD';
    component.password = '12345678';
    component.Login();
    expect(spy).toHaveBeenCalledWith('AD', '12345678');
  });

  it('should call router.navigate method with correct parameters on Login when autenticacionService.login returns true', () => {
    const spy = jest.spyOn(autenticacionService, 'login').mockReturnValue(true);
    component.username = 'AD';
    component.password = '12345678';
    component.Login();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not call router.navigate method on Login when autenticacionService.login returns false', () => {
   jest.spyOn(autenticacionService, 'login').mockReturnValue(false);
    component.username = 'AD';
    component.password = 'wrong-password';
    component.Login();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should set mostrar to true on Login when autenticacionService.login returns false', () => {
    jest.spyOn(autenticacionService, 'login').mockReturnValue(false);
    component.username = 'AD';
    component.password = 'wrong-password';
    component.Login();
    expect(component.mostrar).toBe(true);
  }) 
    
});
