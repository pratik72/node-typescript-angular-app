import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { CreateUsers } from '../../../classes/create-users';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  userForm: FormGroup;

  @ViewChild('content') content: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      organization : new FormControl(),
      role : new FormControl(),
    });
  }

  submitUserForm({ value, valid }) {
    console.log(value, valid);
  }

  openUserModal() {
    this.modalService.open(this.content, { size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }

}
