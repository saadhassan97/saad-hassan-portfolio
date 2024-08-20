import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ApicontactService, Contactme } from '../contact-me/apicontact.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrl: './contact-messages.component.css',
})
export class ContactMessagesComponent implements OnInit {
  contactMessages: Contactme[] = [];
  contactMessage = inject(ApicontactService);
  deleteId: string | undefined = '';

  ngOnInit() {
    this.contactMessage.getAllcontact().subscribe((data) => {
      this.contactMessages = data.data;
    });
  }
  deleteMessage(id: string | undefined) {
    if (id) {
      this.contactMessage.deletecontact(id).subscribe((res) => {
        this.contactMessage.getAllcontact().subscribe((data) => {
          this.contactMessages = data.data;
        });
      });
    }
  }

  saveDeleteid(id: string | undefined) {
    this.deleteId = id;
  }
}
