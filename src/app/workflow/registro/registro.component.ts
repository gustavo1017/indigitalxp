import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { RegistroPresenter } from "./registro.presenter";
import { RegistroService } from "./service/registro.service";

@Component({
  selector: 'indigital-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroPresenter]
})
export class RegistroComponent {

  constructor(
    public registroPresenter: RegistroPresenter,
    public registroService: RegistroService,
    public router:Router) {
  }

  isValidForm(): boolean {
    return this.registroPresenter.form.valid;
  }

  save() {
    try {
      if(this.isValidForm()){
        let request = {
          'name': this.registroPresenter.name.value,
          'lastname': this.registroPresenter.lastname.value,
          'dni': this.registroPresenter.dni.value,
          'email': this.registroPresenter.email.value,
          'birthdate': moment(this.registroPresenter.birthday.value).format('YYYY-MM-DD')
        };
        this.registroService.createCustomer(request).subscribe( () => {
          this.router.navigate(['']);
        });
      }
    }
    catch (e) {
      console.log(e)
    }

  }

}
