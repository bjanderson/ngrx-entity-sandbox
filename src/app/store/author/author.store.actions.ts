import { PayloadAction } from '@lernato/common-angular';
import { Author } from 'src/app/models';

export const AuthorActionTypes = {
  LOAD: '[Author] Load',
  LOAD_FAIL: '[Author] Load Fail',
  LOAD_SUCCESS: '[Author] Load Success',
};

export class LoadAction extends PayloadAction {
  constructor() { super(AuthorActionTypes.LOAD); }
}

export class LoadFailAction extends PayloadAction {
  constructor(payload: any) { super(AuthorActionTypes.LOAD_FAIL, payload); }
}

export class LoadSuccessAction extends PayloadAction {
  constructor(authors: Author[]) { super(AuthorActionTypes.LOAD_SUCCESS, authors); }
}

export type AuthorAction = LoadAction |
  LoadFailAction |
  LoadSuccessAction;
