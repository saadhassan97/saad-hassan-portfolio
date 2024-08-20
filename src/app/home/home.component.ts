import { Component, inject } from '@angular/core';
import { ApihomeService, Home } from './apihome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  home:Home[]=[];
  fetch = inject(ApihomeService);
  done = false;
  ngOnInit(): void {
    this.fetch.getAllhome().subscribe((res) => {
      this.home = res.data;
      this.done = true
    })
  }

}
