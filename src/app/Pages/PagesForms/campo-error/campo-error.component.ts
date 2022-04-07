import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-error',
  templateUrl: './campo-error.component.html',
  styleUrls: ['./campo-error.component.css']
})
export class CampoErrorComponent implements OnInit {

  @Input() error: boolean;
  @Input() mensagem: string;

  constructor() { }

  ngOnInit(): void {
  }

}
