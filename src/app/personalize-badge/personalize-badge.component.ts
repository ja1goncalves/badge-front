import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageInfoComponent } from '../message-info/message-info.component';
import { BadgesService } from '../services/badges.service';
import { saveAs } from 'node_modules/file-saver';

@Component({
  selector: 'app-personalize-badge',
  templateUrl: './personalize-badge.component.html',
  styleUrls: ['./personalize-badge.component.css']
})
export class PersonalizeBadgeComponent implements OnInit {

  @ViewChild(MessageInfoComponent) errorMsgComponent: MessageInfoComponent;
  private layout;
  private attributes = [];
  private participants: string;
  private paperSize: string;
  private processRequest: boolean;

  constructor(private http: HttpClient, private service: BadgesService) {
    this.processRequest = false;
    this.attributes = [
      {
        title: "Nome",
        name: "name",
        value: '',
        negrito: false,
        italico: false,
        size: 30,
        left: 0,
        top: -400
      },
      {
        title: "Instituição",
        name: "institution",
        value: '',
        negrito: false,
        italico: false,
        size: 15,
        left: 0,
        top: -270
      },
      {
        title: "Inscrição",
        name: "subscription",
        value: '',
        negrito: false,
        italico: false,
        size: 20,
        left: 0,
        top: -350
      },
      {
        title: "Categoria",
        value: '',
        name: "category",
        negrito: false,
        italico: false,
        size: 15,
        left: 0,
        top: -310
      }
    ];
  }

  ngOnInit() {
  }

  public getImageBadge(){
    const input = document.getElementById("layout-badge") as HTMLInputElement;
    this.layout = input.files[0];

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img-badge').attr('src', e.target.result);
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

  public getStyleAttribute(name, isForRequest = false){
    var number = this.getAttribute(name);
    const attribute = this.attributes[number];

    const bold = attribute.negrito ? "font-weight: bold; " : "";
    const italic = attribute.italico ? "font-style: italic; " : "";
    var style = '';

    if(isForRequest){
      var delta_top = 0;

      switch(name){
        case 'name': delta_top = 100;
        case 'institution': delta_top = 150;
        case 'subscription': delta_top = 290;
        case 'category': delta_top = 280;
        default: delta_top = 0;
      }

      return style = "left: "+attribute.left+"%; "+
              "top: "+(attribute.top - delta_top)+"px; "+
              "font-size: "+(attribute.size + 7)+"px; "
              +bold+italic+"";
    }else{
      style = "left: "+attribute.left+"%; "+
              "top: "+attribute.top+"px; "+
              "font-size: "+attribute.size+"px; "
              +bold+italic+"";

      const text = document.getElementById("text-" + this.attributes[number].name) as HTMLInputElement;
      text.setAttribute('style', style);
    }
  }

  public setValue(name){
    var number = this.getAttribute(name);
    const input = document.getElementById(this.attributes[number].title + "-input") as HTMLInputElement;
    this.attributes[number].value = input.value;
  }

  public download(){
    this.processRequest = true;

    const participants = document.getElementById("participants") as HTMLInputElement;
    this.participants = participants.value;

    this.paperSize = $('#sell').val();
    this.getBadges();

    this.processRequest = false;
  }

  private getBadges(){
    const body = {
      participants: this.participants,
      style_attributes: {
        name: this.getStyleAttribute('name', true),
        institution: this.getStyleAttribute('institution', true),
        subscription: this.getStyleAttribute('subscription', true),
        category: this.getStyleAttribute('category', true)
      },
      layout: $('#img-badge').attr('src'),
      paper: this.paperSize
    };

    this.service.getBadgesDownload(body)
    .then((response) => {
      const file = new Blob([response], {type: 'application/pdf'});
      const filename = `crachas.pdf`;

      saveAs(file, filename);
    }, (response) => {
      this.alerts.setMessage('All the fields are required','error');
    });
  }

  private getAttribute(name){
    switch(name){
      case 'name': return 0;
      case 'institution': return 1;
      case 'subscription': return 2;
      case 'category': return 3;
    }
  }

  private isLimitFontSize(size){
    const _return = (size <= 50 || size <= 0) ? false : true;
    return _return;
  }

  private isLimitLeft(left){
    return (left <= -30 || left >= 30) ? true : false;
  }

  private isLimitTop(top){
    return (top <= -800 || top >= -50) ? true : false;
  }
}
