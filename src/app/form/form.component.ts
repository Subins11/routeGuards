import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-form-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements CanComponentDeactivate {
  formData: any = {};
  isFormDirty: boolean = false;

  submitForm(form: any): void {
    this.formData = form.value;
    this.isFormDirty = false;
    console.log('Form submitted:', this.formData);
  }

  canDeactivate(): boolean {
    console.log("checkin")
    if (this.isFormDirty) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}