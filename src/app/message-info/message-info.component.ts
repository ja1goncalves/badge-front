import {Component, OnInit} from '@angular/core';
 
@Component({
  selector: 'app-error-msg',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.css']
})

export class MessageInfoComponent implements OnInit {
  public error: string;

  ngOnInit(): void {
  }

  public setError(error: string = "Algo de errado não está certo", tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }
 
 
}
