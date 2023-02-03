import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CanactivateGuard } from './canactivate.guard';
import { AutenticacionService } from './services/autenticacion.service';
describe('CanactivateGuard', () => {
  let guard: CanactivateGuard;
  let autenticationService: AutenticacionService;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [
        AutenticacionService,
        CanactivateGuard
      ]
    });
    guard = TestBed.inject(CanactivateGuard);
    autenticationService = TestBed.inject(AutenticacionService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if the user is logged in', () => {
    jest.spyOn(autenticationService, 'isLoggedIn').mockReturnValue(true);
    expect(autenticationService.isLoggedIn('some-url')).toBe(true);
  });

  it('should navigate to "/login" if the user is not logged in', () => {
    jest.spyOn(autenticationService, 'isLoggedIn').mockReturnValue(false);
    expect(autenticationService.isLoggedIn('some-url')).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
  
});
