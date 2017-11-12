//importanción de modulos, controladores y paginas necesarias
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ProgressPage } from '../pages/progress/progress';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CapituloPage } from '../pages/capitulo/capitulo';
import {ExamenPage} from '../pages/examen/examen';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/iniciar/iniciar';
import {RegisterPage} from '../pages/registro/registro';
import {CapituloService} from './services/capitulo.service';
//fin  de importación
//declaracion de modulos y páginas a utilizar
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProgressPage,
    ContactPage,
    HomePage,
    CapituloPage,
    ExamenPage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],//fin de declaración de módulos
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [//declaración de paginas del sistema
    MyApp,
    AboutPage,
    ProgressPage,
    ContactPage,
    HomePage,
    CapituloPage,
    ExamenPage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],//fin de declaración de páginas
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
