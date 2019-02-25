import { Component, Inject } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'badge-front';
  layout: File;
  atributtes = [
    {
      title: "Nome",
      attribute: "name",
      negrito: false,
      italico: false,
      size: 30
    },
    {
      title: "Instituição",
      attribute: "instituition",
      negrito: false,
      italico: false,
      size: 15
    },
    {
      title: "Inscrição",
      attribute: "subscription",
      negrito: false,
      italico: false,
      size: 20
    },
    {
      title: "Categoria",
      attribute: "category",
      negrito: false,
      italico: false,
      size: 15
    }
  ];

  public getImageBadge(){
    const input = document.getElementById("layout-badge") as HTMLInputElement;
    this.layout = input.files[0];

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#blah').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
}
