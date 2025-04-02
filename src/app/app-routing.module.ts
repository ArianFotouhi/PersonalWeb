import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';  // Add HashLocationStrategy

// Import your components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // Use HashLocationStrategy here
  ]
})
export class AppRoutingModule { }
