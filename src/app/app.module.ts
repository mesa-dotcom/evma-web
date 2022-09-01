import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';


import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { ChipsModule } from 'primeng/chips';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import { TopBarComponent } from './_shared/components/top-bar/top-bar.component';
import { TwoColumnsComponent } from './_shared/components/two-columns/two-columns.component';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './pages/main/main.component';

const primeng = [
  InputNumberModule,
  ButtonModule,
  MenuModule,
  MenubarModule,
  SplitterModule,
  DropdownModule,
  DividerModule,
  MessageModule,
  ChipsModule,
  CardModule,
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopBarComponent,
    TwoColumnsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ...primeng,
    FormlyPrimeNGModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
