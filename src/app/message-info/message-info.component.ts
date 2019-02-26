import { Component } from '@angular/core';
 
@Component({
  selector: 'app-error-msg',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.css']
})

export class MessageInfoComponent {
  public error: string;
 
  public setError(error: string = "Algo de errado não está certo", tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }
 
 
}