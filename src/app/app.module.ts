import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ShowRegistersComponent } from './components/show-registers/show-registers.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ShowRegistersComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
