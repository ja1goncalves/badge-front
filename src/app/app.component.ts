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
  attributes = [
    {
      title: "Nome",
      name: "name",
      value: 'sggvsvs',
      negrito: false,
      italico: false,
      size: 30,
      left: 50,
      top: -790,
    },
    {
      title: "Instituição",
      name: "instituition",
      value: '',
      negrito: false,
      italico: false,
      size: 15,
      left: 50,
      top: 120,
    },
    {
      title: "Inscrição",
      name: "subscription",
      value: '',
      negrito: false,
      italico: false,
      size: 20,
      left: 50,
      top: 130,
    },
    {
      title: "Categoria",
      value: '',
      name: "category",
      negrito: false,
      italico: false,
      size: 15,
      left: 50,
      top: 140,
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

  public setNegrito(name){
    const attribute = this.getAttribute(name);
    this.attributes[attribute].negrito = !this.attributes[attribute].negrito;
  }

  public setItalico(name){
    const attribute = this.getAttribute(name);
    this.attributes[attribute].italico = !this.attributes[attribute].italico;
  }

  public increaseFontSize(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitFontSize(this.attributes[attribute].size + 5)){
      this.attributes[attribute].size += 5;
    }
  }

  public decreaseFontSize(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitFontSize(this.attributes[attribute].size - 5)){
      this.attributes[attribute].size -= 5;
    }
  }

  public moveLeft(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitLeft(this.attributes[attribute].left - 5)){
      this.attributes[attribute].left -= 5;
    }
  }

  public moveRight(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitLeft(this.attributes[attribute].left + 5)){
      this.attributes[attribute].left += 5;
    }
  }
  
  public moveDown(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitTop(this.attributes[attribute].top + 5)){
      this.attributes[attribute].top += 5;
    }
  }

  public moveTop(name){
    const attribute = this.getAttribute(name);
    if(!this.isLimitTop(this.attributes[attribute].top - 5)){
      this.attributes[attribute].top -= 5;
    }
  }

  public getStyleAttribute(name){
    var number = this.getAttribute(name);
    const attribute = this.attributes[number];
    const bold = attribute.negrito ? "font-weight: bold; " : "";
    const italic = attribute.italico ? "font-style: italic; " : ""; 
    return "left: "+attribute.left+"px; top: "+attribute.top+"px; font-size: "+attribute.size+"px; "+bold+italic;
  }

  public setValue(name){
    var number = this.getAttribute(name);
    const input = document.getElementById(this.attributes[number].title + "-buttuon") as HTMLInputElement;
    this.attributes[number].value = input.value;
  }

  private getAttribute(name){
    switch(name){
      case 'name': return 0;
      case 'instituition': return 1;
      case 'subscription': return 2;
      case 'category': return 3;
    }
  }

  private isLimitFontSize(size){
    const _return = (size <= 50 || size <= 0) ? false : true;
    return _return;
  }

  private isLimitLeft(left){
    return (left == 5 || left == 590) ? true : false;
  }

  private isLimitTop(top){
    return (top == 5 || top == 790) ? true : false;
  }
}
