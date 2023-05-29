import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm: any;
  @ViewChild('name') name: any;
  @ViewChild('eMail') eMail: any;
  @ViewChild('message') message: any;
  @ViewChild('submitBtn') submitBtn: any;
  isNameEmpty = false;
  isEmailEmpty = false;
  isMessageEmpty = false;

  sendMail() {
    // this.name.nativeElement.disabled = true;
    // this.eMail.nativeElement.disabled = true;
    // this.message.nativeElement.disabled = true;
    // this.submitBtn.nativeElement.disabled = true;
  }

  checkIfNameEmpty() {
    this.isNameEmpty = this.name.nativeElement.value === '';
  }

  checkIfEmailEmpty() {
    this.isEmailEmpty = this.eMail.nativeElement.value === '';
  }

  checkIfMessageEmpty() {
    this.isMessageEmpty = this.message.nativeElement.value.length <= 25;
  }
}
