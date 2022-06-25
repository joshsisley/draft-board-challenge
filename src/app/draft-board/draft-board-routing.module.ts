import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftBoardContainer } from './draft-board.container';

const routes: Routes = [
  {
    path: '',
    component: DraftBoardContainer,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DraftBoardRoutingModule { }