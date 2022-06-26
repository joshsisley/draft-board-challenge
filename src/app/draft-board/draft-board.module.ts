import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClockComponent } from './clock/clock.component';
import { DraftBoardRoutingModule } from './draft-board-routing.module';

import { DraftBoardContainer } from './draft-board.container';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule, DraftBoardRoutingModule],
  exports: [],
  declarations: [DraftBoardContainer, TeamListComponent, PlayerListComponent, ClockComponent],
  providers: [],
})
export class DraftBoardModule { }
