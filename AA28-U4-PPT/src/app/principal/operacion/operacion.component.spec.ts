import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OperacionComponent } from './operacion.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('OperacionComponent', () => {
  let component: OperacionComponent;
  let fixture: ComponentFixture<OperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionComponent ],
      imports: [ MatFormFieldModule,FormsModule,MatInputModule,MatSelectModule,BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testSumar()', () => {
    expect(component.sumar(1,2)).toEqual(3);
  });
  it('testRestar()', () => {
    expect(component.restar(2,1)).toEqual(1);
  });
  it('testMultiplicar()', () => {
    expect(component.multiplicar(2,2)).toEqual(4);
  });
  it('testDividir()', () => {
    expect(component.dividir(4,2)).toEqual(2);
  });
  it('debería realizar la suma correctamente', () => {
    component.valor1 = 1;
    component.valor2 = 2;
    component.operaciones = 'sumar';
 
    component.Operar();
 
    expect(component.resultado).toBe(3);
  });
 
  it('debería realizar la resta correctamente', () => {
    component.valor1 = 2;
    component.valor2 = 1;
    component.operaciones = 'restar';
 
    component.Operar();
 
    expect(component.resultado).toBe(1);
  });
 
  it('debería realizar la multiplicación correctamente', () => {
    component.valor1 = 2;
    component.valor2 = 3;
    component.operaciones = 'multiplicar';
 
    component.Operar();
 
    expect(component.resultado).toBe(6);
  });
 
  it('debería realizar la división correctamente', () => {
    component.valor1 = 4;
    component.valor2 = 2;
    component.operaciones = 'dividir';
 
    component.Operar();
 
    expect(component.resultado).toBe(2);
  });
  it('debería tener un resultado igual a cero cuando no se especifica una operación', () => {
    component.valor1 = 4;
    component.valor2 = 2;
    component.operaciones = 'ninguna';
 
    component.Operar();
 
    expect(component.resultado).toBe(0);
});

});

