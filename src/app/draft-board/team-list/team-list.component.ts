import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Team } from 'src/app/app.types';

@Component({
  selector: 'app-team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TeamListComponent implements OnInit {
  @Input() teams!: Team[];

  constructor() {}

  ngOnInit() {}
}