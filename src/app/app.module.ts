import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { AcercadedashComponent } from './acercadedash/acercadedash.component';
import { BannerComponent } from './banner/banner.component';
import { BannerdashComponent } from './bannerdash/bannerdash.component';
import { BodydashComponent } from './bodydash/bodydash.component';
import { BtnloginComponent } from './btnlogin/btnlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EducaciondashComponent } from './educaciondash/educaciondash.component';
import { ErrorComponent } from './error/error.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ExperienciadashComponent } from './experienciadash/experienciadash.component';
import { FooterComponent } from './footer/footer.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HabilidadesdashComponent } from './habilidadesdash/habilidadesdash.component';
import { ImgdashComponent } from './imgdash/imgdash.component';
import { IndexComponent } from './index/index.component';
import { LogoutdashComponent } from './logoutdash/logoutdash.component';
import { LoginComponent } from './modales/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbardashComponent } from './navbardash/navbardash.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosdashComponent } from './proyectosdash/proyectosdash.component';
import { RedesComponent } from './redes/redes.component';
import { RedesdashComponent } from './redesdash/redesdash.component';
import { SectiondashComponent } from './sectiondash/sectiondash.component';
import { SidebardashComponent } from './sidebardash/sidebardash.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    AcercadedashComponent,
    BannerComponent,
    BannerdashComponent,
    BodydashComponent,
    BtnloginComponent,
    DashboardComponent,
    EducacionComponent,
    EducaciondashComponent,
    ErrorComponent,
    ExperienciaComponent,
    ExperienciadashComponent,
    FooterComponent,
    HabilidadesComponent,
    HabilidadesdashComponent,
    ImgdashComponent,
    IndexComponent,
    LogoutdashComponent,
    LoginComponent,
    NavbarComponent,
    NavbardashComponent,
    ProyectosComponent,
    ProyectosdashComponent,
    RedesComponent,
    RedesdashComponent,
    SectiondashComponent,
    SidebardashComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
