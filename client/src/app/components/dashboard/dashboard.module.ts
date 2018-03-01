import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(DashboardRoutes),
     FormsModule,
     ReactiveFormsModule,
     MDBBootstrapModule.forRoot(),
     HttpModule
   ],
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductService]
})

export class DashboardModule {}
