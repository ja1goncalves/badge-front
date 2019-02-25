import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'badge-front';
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
}
