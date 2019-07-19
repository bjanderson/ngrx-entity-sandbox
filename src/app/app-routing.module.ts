import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',

  children: [

    // ----- DEFAULT ----- //
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'authors',
    },

    // ----- AUTHOR ----- //
    {
      path: 'authors',
      loadChildren: () => import('./components/author-page/author-page.module').then(m => m.AuthorPageModule),
    },

    // ----- BOOK ----- //
    {
      path: 'books',
      loadChildren: () => import('./components/book-page/book-page.module').then(m => m.BookPageModule),
    },

    // ----- ERROR ----- //
    // {
    //   path: 'error',
    //   loadChildren: () => import('./components/error/error.module').then(m => m.ErrorModule),
    // },

    // ----- NOT FOUND ----- //
    // {
    //   path: '**',
    //   loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule),
    // },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
