import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Skill, SkillsService } from '../about-me/skills.service';
import { ApiskillsService } from './apiskills.service';

@Component({
  selector: 'app-db-skills',
  templateUrl: './db-skills.component.html',
  styleUrl: './db-skills.component.css',
})
export class DbSkillsComponent implements OnInit {
  skills: Skill[] = [];
  fetch = inject(ApiskillsService);
  editMood = false;
  editSkill() {
    this.editMood = !this.editMood;
  }

  constructor(private contactService: ContactService) {}
  ngOnInit() {
    this.fetch.getAllSkills().subscribe((res) => {
      this.skills = res.data;
    });
  }
  deleteSkill(id: string|undefined) {
    if(id){
      this.fetch.deleteSKill(id).subscribe((res) => {
        this.fetch.getAllSkills().subscribe((res) => {
          this.skills = res.data;
        });
      });
    }
  }
}
