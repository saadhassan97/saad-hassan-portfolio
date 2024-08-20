import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from '../db-services/apiservices.service';

@Component({
  selector: 'app-add-servic',
  templateUrl: './add-servic.component.html',
  styleUrl: './add-servic.component.css'
})
export class AddServicComponent {
  fetch = inject(ApiservicesService);
  addForm!: FormGroup;
  router = inject(Router);
  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
    });
  }
  saveService(){
    const element = document.getElementById('img') as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    const formData = new FormData();
    if(file){
      formData.append('file', file);
    }
    this.fetch.uploadImg(formData).subscribe((res) => {
      const newService = {
        title: this.addForm.value.title,
        img: res.filepath,
        desc: this.addForm.value.desc,
      }
      this.fetch.createService(newService).subscribe((res) => {
        this.router.navigate(['/dashboard/db-services']);
      })
    })
  }
}
