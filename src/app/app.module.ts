import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {UserModule} from '../user/user.module'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReusableComponent } from '../reusable/reusable.component';
import {ChildComponent} from '../child/child.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule, UserModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, ReusableComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
