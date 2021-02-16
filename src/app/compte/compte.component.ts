import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  Name: string = 'Paramètres';
  constructor() { }

  ngOnInit(): void {
  }

}
