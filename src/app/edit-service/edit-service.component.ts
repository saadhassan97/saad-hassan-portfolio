import { Component, inject } from '@angular/core';
import { ApiservicesService } from '../db-services/apiservices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../services/service.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css'
})
export class EditServiceComponent {
  fetch = inject(ApiservicesService);
  editServiceForm!: FormGroup;
  router = inject(Router);
  activedroute = inject(ActivatedRoute);
  currentid!: string | null;
  currentservice!: Service;
  ngOnInit(): void {
    this.editServiceForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });

    this.currentid = this.activedroute.snapshot.paramMap.get('id');
    this.fetch.getServicesbyId(this.currentid).subscribe((res) => {
      this.currentservice = res.services;
      console.log(this.currentservice);
      this.editServiceForm.patchValue({
        title: this.currentservice.title, desc: this.currentservice.desc})

      
    });
  }
  saveService() {
    
    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    if(file){
      formData.append('file', file);
    }
    this.fetch.uploadImg(formData).subscribe((res) => {
      this.currentservice.title = this.editServiceForm.value.name;
      this.currentservice.desc = this.editServiceForm.value.desc;
      this.currentservice.img = res.filepath;
      this.fetch.updateService(this.currentid, this.currentservice).subscribe((res) => {
        console.log(res);
        
      })
    })
    
  }
}