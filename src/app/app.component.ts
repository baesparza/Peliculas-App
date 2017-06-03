import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buscar_form_nav: FormGroup;

  constructor (private _router: Router) {

    this.buscar_form_nav = new FormGroup({
      buscar_input: new FormControl('', Validators.required)
    });
  }

  buscarpelicula() {
    // console.log(termino);
    if (this.buscar_form_nav.valid) {
      this._router.navigate(['/search', this.buscar_form_nav.value.buscar_input]);
    }

  }
}
