import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthorStoreService } from 'src/app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-author-page',
  styleUrls: ['./author-page.component.scss'],
  templateUrl: './author-page.component.html'
})
export class AuthorPageComponent {

  authors$ = this.authorStoreService.getAll();

  constructor(
    private authorStoreService: AuthorStoreService
  ) {}
}
