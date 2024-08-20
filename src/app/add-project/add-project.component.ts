import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../db-projects/projects.service';
import { title } from 'process';
import { link } from 'fs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {

  fetch = inject(ProjectsService);
  addForm!: FormGroup;
  router = inject(Router);
  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
    });
  }
  saveProject(){
    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    if(file){
      formData.append('file', file);
    }
    this.fetch.uploadImg(formData).subscribe((res) => {
      const newProject = {
        title: this.addForm.value.title,
        img: res.filepath,
        desc: this.addForm.value.desc,
        link: this.addForm.value.link
      }
      this.fetch.createProject(newProject).subscribe((res) => {
        this.router.navigate(['/dashboard/db-projects']);
      })
    })
  }
}
