import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {//implements OnInit {
  contact: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  message:string;

  constructor(public crudservice:CrudService) { }

  /*CreateRecord() will fire after the user press the "Create Contact" btn*/
  CreateRecord()
  {
    //The function stores within the relevant fields in "Record" variable, the user's input
    let Record = {};
    Record['name'] = this.contactName;
    Record['email'] = this.contactEmail;
    Record['phone'] = this.contactPhone;
    
    //create_NewContact is defined in crud.service.ts file
    this.crudservice.create_NewContact(Record).then(res => {
      this.contactName = "";
      this.contactEmail = "";
      this.contactPhone = "";
      console.log(res);
      this.message = "Contact data save done";
    }).catch(error => {
      console.log(error);
    })
  }



  //ngOnInit(): void {
  //}
}
