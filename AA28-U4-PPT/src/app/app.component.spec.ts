import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { OperacionComponent } from './principal/operacion/operacion.component';

describe('AppComponent', () => {
  let calculator:  OperacionComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        OperacionComponent
      ],
    }).compileComponents();
  });
 /*  it('testSuma', () => {
    const result = component.sumar(1, 2);
    expect(result).toEqual(3);
    }); */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reto28-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reto28-angular');
  });


});
