import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewProductoComponent } from './pages/new-producto/new-producto.component';
import { ListProductoComponent } from './pages/list-producto/list-producto.component';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule} from '@angular/forms'
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LoginComponent } from './pages/login/login.component';
// import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  declarations: [
    AppComponent,
    NewProductoComponent,
    ListProductoComponent,
    LoginComponent
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,     
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
