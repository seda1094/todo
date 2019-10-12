import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UIModule } from './ui/ui.module';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './core/header/header.component';
import { AddJoinWorkplaceComponent } from './main/add-join-workplace/add-join-workplace.component';
import { AddWorkplaceComponent } from './main/add-join-workplace/add-workplace/add-workplace.component';
import { JoinWorkplaceComponent } from './main/add-join-workplace/join-workplace/join-workplace.component';
import { JoinCodeComponent } from './main/add-join-workplace/join-workplace/join-code/join-code.component';
import { WokplaceListComponent } from './main/wokplace-list/wokplace-list.component';
import { WokplaceListItemComponent } from './main/wokplace-list/wokplace-list-item/wokplace-list-item.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    AddJoinWorkplaceComponent,
    AddWorkplaceComponent,
    JoinWorkplaceComponent,
    JoinCodeComponent,
    WokplaceListComponent,
    WokplaceListItemComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    AppRoutingModule,
    UIModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
