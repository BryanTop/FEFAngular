import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contactDataService;

  constructor(ContactService: ContactService) {this.contactDataService = ContactService;}

  ngOnInit() {
    this.contacts = this.contactDataService.contacts;
  }

}
