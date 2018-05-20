import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { MaterialImportModule } from './../../shared/modules/material-import/material-import.module';

import { LoginComponent } from './views/login/login.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { SharedComponentsModule } from './../../shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
    MaterialImportModule,
    SharedComponentsModule
  ],
  declarations: [
    LoginComponent,
    ChangePasswordComponent
  ]
})
export class GuestModule { }
