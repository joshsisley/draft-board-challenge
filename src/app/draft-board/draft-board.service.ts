import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PLAYERS, TEAMS } from '../app.constants';
import { Player, Team } from '../app.types';



@Injectable({providedIn: 'root'})
export class DraftBoardService {
  players: Player[] = PLAYERS;
  teams: Team[];
  displayedTeams$ = new BehaviorSubject<Team[]>([]);
  players$ = new BehaviorSubject<Player[]>(this.players);
  lastDrafted$ = new Subject<Team>();
  displayedTeams: Team[] = [];
  onTheClockIndex = 0;

  constructor() {
    this.teams = TEAMS.map((team, index) => {
      return {...team, 'onTheClock': false, 'pick': index + 1 } 
    });
  }

  selectPlayer(player: Player) {
    this.teams[this.onTheClockIndex].draftedPlayers.push(player);
    this.lastDrafted$.next(this.teams[this.onTheClockIndex]);
    const index = this.players.findIndex(p => p.name === player.name);
    if (index > -1) {
      this.players.splice(index, 1);
      this.players$.next([...this.players]);
    }
    this.onTheClockIndex++;
    this.getDisplayedTeams();
  }

  autoSelectPlayer() {
    const player = this.players.shift();
    this.players$.next([...this.players]);
    if (player) {
      this.teams[this.onTheClockIndex].draftedPlayers.push(player);
      this.lastDrafted$.next(this.teams[this.onTheClockIndex]);
      this.onTheClockIndex++;
      this.getDisplayedTeams();
    }
  }

  getDisplayedTeams() {
    if (this.onTheClockIndex <= 1) {
      this.displayedTeams$.next([...this.teams.slice(0,5)]);
    } else if (this.onTheClockIndex <= this.teams.length - 1 && this.onTheClockIndex >= this.teams.length - 2) {
      this.displayedTeams$.next([...this.teams.slice(this.teams.length - 5, this.teams.length - 1)]);
    } else {
      this.displayedTeams$.next([...this.teams.slice(this.onTheClockIndex - 2, this.onTheClockIndex + 3)]);
    }
  }
}