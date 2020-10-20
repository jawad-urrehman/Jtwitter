import { UserService } from './services/user-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard';
import { MsgService } from './services/message-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { MsgComponent } from './msg/msg.component';

import { AppRoutingModule } from './routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TwetComponent } from './twet/twet.component';
import { ShowMsgComponent } from './show-msg/show-msg.component';
import { EditMsgComponent } from './edit-msg/edit-msg.component';
import { UserProfComponent } from './user-prof/user-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegComponent,
    LoginComponent,
    MsgComponent,
    TwetComponent,
    ShowMsgComponent,
    EditMsgComponent,
    UserProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MsgService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
