import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";

// Prime NG
import { ToastModule } from "primeng/toast";
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/components/common/messageservice';

// Others Import
import { Ng2SmartTableModule } from "ng2-smart-table";


// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './admin/news/news.component';
import { ApiServiceService } from './service/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRF-TOKEN'
    }),
    HttpClientModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
    DropdownModule,
    InputTextareaModule,
    Ng2SmartTableModule
  ],
  providers: [MessageService, ApiServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
