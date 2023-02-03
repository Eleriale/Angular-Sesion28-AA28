import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    service = new AutenticacionService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('debe retornar verdadero si se proporcionan credenciales válidas', () => {
    const username = 'AD';
    const password = '12345678';
    const result = service.login(username, password);
    expect(result).toBeTruthy();
  });

  it('debe retornar falso si se proporcionan credenciales inválidas', () => {
    const username = 'invalid';
    const password = 'invalid';
    const result = service.login(username, password);
    expect(result).toBeFalsy();
  });

  it('debe cambiar el estado de inicio de sesión después de un inicio de sesión exitoso', () => {
    const username = 'AD';
    const password = '12345678';
    service.login(username, password);
    service.changeLoginStatus$.subscribe(status => {
      expect(status).toBeTruthy();
    });
  });

  it('debe cambiar el estado de inicio de sesión después de un cierre de sesión', () => {
    service.logout();
    service.changeLoginStatus$.subscribe(status => {
      expect(status).toBeFalsy();
    });
  });

  it('debe retornar verdadero si el usuario está conectado', () => {
    const username = 'Dkli';
    const password = 'lilian123';
    service.login(username, password);
    const result = service.isLoggedIn('/');
    expect(result).toBeTruthy();
  });
  it('debe retornar verdadero si el usuario está conectado', () => {
    const username = 'Silvi';
    const password = 'silvi456';
    service.login(username, password);
    const result = service.isLoggedIn('/');
    expect(result).toBeTruthy();
  });

  
});
