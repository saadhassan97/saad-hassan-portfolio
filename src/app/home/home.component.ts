import { Component, inject, OnInit } from '@angular/core';
import { ApihomeService, Home } from './apihome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  home: Home[] = [];
  titleAnimated: string[] = [];
  titleOrgin: string[] = [];
  fetch = inject(ApihomeService);
  index = 0;
  title = "";
  done = false;
  intervalId: any;

  ngOnInit() {
    this.fetch.getAllhome().subscribe((res) => {
      this.home = res.data;
      this.done = true;
      this.titleOrgin = this.home[1]?.firstDesc.split("") || [];
      this.animation();
    });
  }

  animation() {
    this.intervalId = setInterval(() => {
      if (this.index < this.titleOrgin.length) {
        this.titleAnimated.push(this.titleOrgin[this.index]);
        this.index++;
        this.title = this.titleAnimated.join("");
      } else {
        clearInterval(this.intervalId);
      }
    }, 100 ); // Reduced interval time to 200ms for smoother animation
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear interval when component is destroyed to prevent memory leaks
    }
  }
}
