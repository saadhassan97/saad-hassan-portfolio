import { Component, inject } from '@angular/core';
import { ApiservicesService, } from '../db-services/apiservices.service';
import { Service } from './service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serviceServices = inject(ApiservicesService);
  service:Service[]=[];
  ngOnInit(): void {
    this.serviceServices.getAllservices().subscribe((res) => {
      this.service = res.data
    })
  }
}

