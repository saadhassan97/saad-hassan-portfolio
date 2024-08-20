import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skill: Skill[] = [
    //   {
    //     name: 'HTML',
    //     img: 'assets/1.png',
    //     id:1
    //   },
    //   {
    //     name: 'CSS',
    //     img: 'assets/2.png',
    //     id:2
    //   },
    //   {
    //     name: 'JavaScript',
    //     img: 'assets/3.png',
    //     id:3,
    //   },
    //   {
    //     name: 'TypeScript',
    //     img: 'assets/4.png',
    //     id:4
    //   },
    //   {
    //     name: 'Angular',
    //     img: 'assets/0.svg',
    //     id:5
    //   },
    //   {
    //     name: 'Node JS',
    //     img: 'assets/5.png',
    //     id:6
    //   },
    //   {
    //     name: 'Express JS',
    //     img: 'assets/6.png',
    //     id:7
    //   },
    //   {
    //     name: 'MongoDB',
    //     img: 'assets/7.png',
    //     id:8
    //   },
    //   {
    //     name: 'UI & UX Design',
    //     img: 'assets/8.png',
    //     id:9
    //   },
  ];
  getSkills() {
    return this.skill;
  }
  editSKill(index: number, skill: Skill) {
    this.skill[index] = skill;
  }
}

export interface Skill {
  _id?: string;
  name: string;
  img: string;
}
