import { Component, inject } from '@angular/core';
import { Skill, SkillsService } from './skills.service';
import { ApiskillsService } from '../db-skills/apiskills.service';
import { Aboutme, ApiaboutService } from './apiabout.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  skillServices = inject(ApiskillsService);
  skills:Skill[]=[];
  aboutme:Aboutme[]=[];
  fetch = inject(ApiaboutService);
  done = false;
  ngOnInit(): void {
    this.skillServices.getAllSkills().subscribe((res) => {
      this.skills = res.data
    })
    this.fetch.getAllhome().subscribe((res) => {
      this.aboutme = res.data;
      this.done = true
    })
  }
}
