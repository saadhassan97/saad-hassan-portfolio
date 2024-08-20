import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '../projects/projects.service';

@Component({
  selector: 'app-db-projects',
  templateUrl: './db-projects.component.html',
  styleUrl: './db-projects.component.css'
})
export class DbProjectsComponent implements OnInit {

  project = inject(ProjectsService);
  projects: Project [] = [];
  fetch = inject(ProjectsService);
  editMood = false;
  updateProject() {
    this.editMood = !this.editMood;
  }
  ngOnInit() {
    this.fetch.getAllprojects().subscribe((res) => {
      this.projects = res.data;
    });
  }
  deleteProjects(id: string|undefined) {
    if(id){
      this.fetch.deleteProject(id).subscribe((res) => {
        this.fetch.getAllprojects().subscribe((res) => {
          this.projects = res.data;
        });
      });
    }
  }
}

