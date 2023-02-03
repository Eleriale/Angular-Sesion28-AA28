import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OperacionComponent } from './operacion/operacion.component';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    
  OperacionComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports:[
   
    OperacionComponent,

    //Angular Material
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
    
  ]
})
export class PrincipalModule { }
