import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiSigninService } from './sign-in/api-signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // activedroute = inject(ActivatedRoute);
  // router = inject(Router);
  // signin = inject(ApiSigninService);
  // constructor() {
  //   console.log(this.router.url);
  //   if (this.router.url.includes('/dashboard')) {
  //     if (this.signin.checkAuth() === false) {
  //       this.router.navigate(['/signIn']);
  //       console.log('false');
  //     } else if (this.signin.checkAuth() === true) {
  //       this.router.navigate(['/dashboard']);
  //     }
  //   }
  // }
}
