import { Component, inject } from '@angular/core';
import { ApiService, Resume } from './api.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  resume = inject(ApiService);
  images: Resume[] = [];
  done = false;

  ngOnInit() {
    this.resume.getAllSkills().subscribe((data) => {
      this.images = data.data;
      this.done = true;
    });
  }
}
