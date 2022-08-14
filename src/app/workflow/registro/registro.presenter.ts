import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class RegistroPresenter {

  name = new FormControl();
  lastname = new FormControl();
  dni = new FormControl();
  email = new FormControl();
  birthday = new FormControl();

  form: FormGroup = new FormGroup({
    name: this.name,
    lastname: this.lastname,
    dni: this.dni,
    email: this.email,
    birthday: this.birthday
  });

  constructor() {
    this.addFormValidators();
  }

  private addFormValidators(): void {
    this.name.setValidators([
      Validators.required,
    ]);

    this.lastname.setValidators([
      Validators.required,
    ]);

    this.dni.setValidators([
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8)
    ]);

    this.email.setValidators([
      Validators.required,
      Validators.email
    ]);

    this.birthday.setValidators([
      Validators.required,
    ]);
  }

}
