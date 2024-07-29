import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GentsComponent } from './gents/gents.component';
import { LadiesComponent } from './ladies/ladies.component';
import { BoysGirlsComponent } from './boys-girls/boys-girls.component';
import { ViewComponent } from './view/view.component';
import { ViewChildrensComponent } from './view-childrens/view-childrens.component';
import { ViewLadiesComponent } from './view-ladies/view-ladies.component';
import { AddGentsComponent } from './add-gents/add-gents.component';
import { AddLadiesComponent } from './add-ladies/add-ladies.component';
import { AddChildrenComponent } from './add-children/add-children.component';
import { EditGentsComponent } from './edit-gents/edit-gents.component';
import { EditChildrensComponent } from './edit-childrens/edit-childrens.component';
import { EditLadiesComponent } from './edit-ladies/edit-ladies.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrdersComponent } from './orders/orders.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'gents',component:GentsComponent},
  {path:'ladies',component:LadiesComponent},
  {path:'childrens',component:BoysGirlsComponent},
  {path:'product/view/:id',component:ViewComponent},
  {path:'childrens/view/:id',component:ViewChildrensComponent},
  {path:'ladies/view/:id',component:ViewLadiesComponent},
  {path:'add-gents',component:AddGentsComponent},
  {path:'add-ladies',component:AddLadiesComponent},
  {path:'add-childrens',component:AddChildrenComponent},
  {path:'edit-gents/:id',component:EditGentsComponent},
  {path:'edit-ladies/:id',component:EditLadiesComponent},
  {path:'edit-childrens/:id',component:EditChildrensComponent},
  {path:'',component:AdminLoginComponent},
  {path:'orders',component:OrdersComponent},
  {path:'messages',component:MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
