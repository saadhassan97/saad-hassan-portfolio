import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard.guard.spec';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { ContactMessagesComponent } from './contact-messages/contact-messages.component';
import { DbSkillsComponent } from './db-skills/db-skills.component';
import { DbProjectsComponent } from './db-projects/db-projects.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { DbServicesComponent } from './db-services/db-services.component';
import { AddServicComponent } from './add-servic/add-servic.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
  },
  { path: 'services', component: ServicesComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'edit-skill/:id', component: EditSkillComponent },
  { path: 'dashboard/contact-messages', component: ContactMessagesComponent },
  { path: 'dashboard/db-skills', component: DbSkillsComponent },
  { path: 'dashboard/db-projects', component: DbProjectsComponent },
  { path: 'edit-projects/:id', component: EditProjectsComponent },
  { path: 'dashboard/add-project', component: AddProjectComponent },
  { path: 'dashboard/add-skill', component: AddSkillComponent },
  { path: 'dashboard/db-services', component: DbServicesComponent },
  { path: 'add-servic', component: AddServicComponent },
  { path: 'edit-service/:id', component: EditServiceComponent },
  { path: 'add-skill/:id', component: AddSkillComponent },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
