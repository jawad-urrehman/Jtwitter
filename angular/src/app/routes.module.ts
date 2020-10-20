import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';
import { AuthGuard } from './auth-guard';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { MsgComponent } from './msg/msg.component';
import { LoginComponent } from './login/login.component';
import { TwetComponent } from './twet/twet.component';
import { ShowMsgComponent } from './show-msg/show-msg.component';
import { EditMsgComponent } from './edit-msg/edit-msg.component';
import { UserProfComponent } from './user-prof/user-prof.component';


const routes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'reg', component:RegComponent},
  {path:'msg', component:MsgComponent , canActivate:[AuthGuard]},
  {path:'log', component:LoginComponent},
  {path:'tweet', component:TwetComponent},
  {path:'show', component:ShowMsgComponent , canActivate:[AuthGuard]},
  {path:'edit/:id', component:EditMsgComponent,canActivate:[AuthGuard]},
  {path:'userProf/:id', component:UserProfComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }