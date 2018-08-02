import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare const $;


@Component({
  selector: 'app-basic-form-validation',
  templateUrl: './basic-form-validation.component.html'
})
export class BasicFormValidationComponent implements OnInit {
  Name: any;
  Password:any;
  Phone:any;
  fileObj:any;
  noFileSelected:boolean=false;
  userNameRegexPattern = /^[a-zA-Z0-9_]+$/;
  isPhoneNumberValid:boolean = false;
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];



  constructor(private router: Router) {
  }

  ngOnInit() {
    $('body').trigger('EditedData', false);
    }

  getFile(event) {
    this.noFileSelected = false;
    this.fileObj = event.target.files[0];
  }

  phoneNumberValueChange() {
    this.isPhoneNumberValid = false;
  }

  phoneValidation() {
    if (this.Phone) {
      let phoneNumber = this.Phone.replace(/\D+/g, '');
      if (phoneNumber.length != 10) {
        this.isPhoneNumberValid = true;
        return false;
      } else {
        this.Phone = this.Phone.replace(/\D+/g, '');
        this.isPhoneNumberValid = false;
        return true;
      }
    }
    return true;
  }

  checkFileSelectOrNot(){
    if(!this.fileObj){
      this.noFileSelected = true;
      return false;
    }else{
        this.noFileSelected = false;
        return true;
    }

  }
  validateForm(form) {
    if (this.checkFileSelectOrNot() && this.phoneValidation() && form.valid)  {
        this.router.navigate(['/data/list']);
    }
  }
}
