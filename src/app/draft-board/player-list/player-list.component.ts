import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/app.types';

@Component({
  selector: 'app-player-list',
  templateUrl: 'player-list.component.html'
})

export class PlayerListComponent implements OnInit {
  @Input() players!: Player[];
  @Output() selectPlayerEvent = new EventEmitter<Player>();
  constructor() { }

  ngOnInit() { }

  selectPlayer(player: Player) {
    this.selectPlayerEvent.emit(player);
  }
}