import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

// Prime NG
import { ToastModule } from "primeng/toast";
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/components/common/messageservice';
import { CalendarModule } from 'primeng/calendar';

// Others Import
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './admin/news/news.component';
import { ApiServiceService } from './service/api-service.service';
import { SeriesComponent } from './admin/series/series.component';
import { VidoesComponent } from './admin/vidoes/vidoes.component';
import { AudiosComponent } from './admin/audios/audios.component';
import { AuthorComponent } from './admin/author/author.component';
import { DriversComponent } from './admin/drivers/drivers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    NewsComponent,
    SeriesComponent,
    VidoesComponent,
    AudiosComponent,
    AuthorComponent,
    DriversComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
    DropdownModule,
    InputTextareaModule,
    Ng2SmartTableModule,
    CalendarModule,
    NgZorroAntdModule
  ],
  providers: [ApiServiceService, MessageService, HttpClientModule, {provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})

export class AppModule {}
