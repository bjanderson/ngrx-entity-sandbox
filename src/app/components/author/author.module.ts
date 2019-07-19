import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [ AuthorComponent ],

  exports: [ AuthorComponent ],

  imports: [
    CommonModule
  ]
})
export class AuthorModule {}
