import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { TableComponent } from './component/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { IndicatorComponent } from './component/indicator/indicator.component';
import { RegistroModule } from './workflow/registro/registro.module';
import { AppRoutingModule } from './app-rounting.module';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    IndicatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule,
    MatCardModule,
    RegistroModule,
    HttpClientModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
