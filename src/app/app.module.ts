import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GentsComponent } from './gents/gents.component';
import { LadiesComponent } from './ladies/ladies.component';
import { BoysGirlsComponent } from './boys-girls/boys-girls.component';
import { OrdersComponent } from './orders/orders.component';
import { MessageComponent } from './message/message.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { ViewLadiesComponent } from './view-ladies/view-ladies.component';
import { ViewChildrensComponent } from './view-childrens/view-childrens.component';
import { AddGentsComponent } from './add-gents/add-gents.component';
import { AddLadiesComponent } from './add-ladies/add-ladies.component';
import { AddChildrenComponent } from './add-children/add-children.component';
import { FormsModule } from '@angular/forms';
import { EditGentsComponent } from './edit-gents/edit-gents.component';
import { EditLadiesComponent } from './edit-ladies/edit-ladies.component';
import { EditChildrensComponent } from './edit-childrens/edit-childrens.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GentsComponent,
    LadiesComponent,
    BoysGirlsComponent,
    OrdersComponent,
    MessageComponent,
    AdminLoginComponent,
    ViewComponent,
    ViewLadiesComponent,
    ViewChildrensComponent,
    AddGentsComponent,
    AddLadiesComponent,
    AddChildrenComponent,
    EditGentsComponent,
    EditLadiesComponent,
    EditChildrensComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
