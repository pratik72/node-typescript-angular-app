import { FormGroup, FormControl, FormArray, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CommonApiService } from '../../../services/common-api/common-api.service';
import { AdminApiConstants } from '../../../common/admin-api-constants.enum';

@Component({
  selector: 'app-organization-modal',
  templateUrl: './organization-modal.component.html',
  styleUrls: ['./organization-modal.component.scss']
})
export class OrganizationModalComponent implements OnInit {

  dataForm: FormGroup;

  @ViewChild('content') content: string;

  constructor(private modalService: NgbModal, private commonApi: CommonApiService) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      orgName : new FormControl('', Validators.required),
      ceoName : new FormControl(),
      cinNo : new FormControl(),
      panNo : new FormControl(),
      exciseNo : new FormControl(),
      tinNo : new FormControl(),
      cstNo : new FormControl(),
      gstNo : new FormControl(),
      serviceTaxNo : new FormControl(),
      exportImportNo : new FormControl(),
      formRegistrationNo : new FormControl(),
      website : new FormControl(),
      email : new FormControl(),
      address1 : new FormControl(),
      address2 : new FormControl(),
      city : new FormControl(),
      district : new FormControl(),
      state : new FormControl(),
      country : new FormControl(),
      status : new FormControl(),
    });

    console.log(AdminApiConstants.CREATE_ORGANIZATION);
  }

  submitForm({ formData, valid }) {

    const orgApi = this.commonApi.postData( AdminApiConstants.CREATE_ORGANIZATION , formData );
    orgApi.subscribe( (data) => {
      console.log('-----', data);
    });
    console.log(formData, valid);
  }

  openModal() {
    this.modalService.open(this.content, { size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }

}
