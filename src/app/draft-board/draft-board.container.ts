import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Player, Team } from '../app.types';
import { DraftBoardService } from './draft-board.service';

@Component({
  selector: 'app-draft-board',
  templateUrl: 'draft-board.container.html',
  styleUrls: ['./draft-board.container.scss'],
})

export class DraftBoardContainer implements OnInit {
  teams$ = this.draftBoardService.displayedTeams$;
  players$ = this.draftBoardService.players$;
  lastDrafted$ = this.draftBoardService.lastDrafted$;
  onTheClockTeam!: Team;
  resetTimer: boolean = false;

  constructor(private draftBoardService: DraftBoardService) { }

  ngOnInit() {
    this.draftBoardService.getDisplayedTeams();
  }

  onTimeOut() {
    this.draftBoardService.autoSelectPlayer();
  }

  onSelectPlayer(player: Player) {
    this.draftBoardService.selectPlayer(player);
    this.resetTimer = true;
    setTimeout(() => {
      this.resetTimer = false;
    }, 0);
  }
}