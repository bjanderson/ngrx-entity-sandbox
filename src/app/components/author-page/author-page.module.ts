import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorTableModule } from '../author-table';
import { AuthorPageComponent } from './author-page.component';

export const routes: Routes = [{
  path: '',
  component: AuthorPageComponent
}];

@NgModule({
  declarations: [ AuthorPageComponent ],

  exports: [ AuthorPageComponent ],

  imports: [
    CommonModule,
    AuthorTableModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorPageModule {}
