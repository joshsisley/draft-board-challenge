import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatCardModule],
  exports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatCardModule, SuccessComponent],
  declarations: [SuccessComponent],
  providers: [],
})
export class SharedModule {}
