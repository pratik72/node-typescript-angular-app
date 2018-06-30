import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { CreateUsers } from '../../classes/create-users';

@Component({
  selector: 'app-adm-user-modal',
  templateUrl: './adm-user-modal.component.html',
  styleUrls: ['./adm-user-modal.component.scss']
})
export class AdmUserModalComponent implements OnInit {

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
    setInterval(() => {

    }, 200);
    this.modalService.open(this.content, { size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }

}
