import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/app.types';

@Component({
  selector: 'app-player-list',
  templateUrl: 'player-list.component.html',
  styleUrls: ['player-list.component.scss']
})

export class PlayerListComponent implements OnInit {
  @Input() players!: Player[];
  @Output() selectPlayerEvent = new EventEmitter<Player>();

  displayedColumns: string[] = ['name', 'position', 'country', 'age', 'action'];

  constructor() { }

  ngOnInit() { }

  selectPlayer(player: Player) {
    this.selectPlayerEvent.emit(player);
  }
}