import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { routes } from './app.routes';

import { appRoutes } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';


// import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    NavbarComponent,
    CertificatesComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule.forRoot(appRoutes)
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
