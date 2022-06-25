import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Team } from 'src/app/app.types';

@Component({
  selector: 'app-on-the-clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['./clock.component.scss']
})

export class ClockComponent implements OnInit {
  @Input() reset: boolean = false;
  @Input() team!: Team;
  @Output() timeOut = new EventEmitter();
  seconds: number = 30;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.timer();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.reset.currentValue && !changes.reset.previousValue) {
      this.seconds = 30;
      clearInterval(this.interval);
      this.timer();
    }
  }

  timer() {
    this.interval = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.timeOut.emit();
        this.seconds = 10;
      }
    }, 1000);
  }
}