import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: 'success.component.html',
  styleUrls: ['./success.component.scss']
})

export class SuccessComponent implements OnInit {
  @Input() message: string = 'Success!';
  constructor() { }

  ngOnInit() { }
}