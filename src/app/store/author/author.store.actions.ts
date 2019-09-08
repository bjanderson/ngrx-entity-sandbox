import { PayloadAction } from '@lernato/common-angular';
import { Author } from 'src/app/models';

/**
 * Stick to only making actions for store interactions.
 * All calls to the server should be done through a service.
 * Any state mutation and UI signaling (loading, error, etc... should be handled by the service)
 * Use the store strictly for data storage and retrieval.
 *
 * We use the service to interact with data on the server.
 * We use the store to interact with data on the client.
 * Components and Services call/subscribe-to functions in the service.
 * Services call server APIs.
 * Services pass data to stores.
 * Components and Services retrieve/subscribe-to data from the store.
 *
 * Doing this means we have more direct control over error handling and loading indicators
 * because we can subscribe to observables from the service,
 * as opposed to being isolated from api calls by store action dispatchers.
 *
 * This also means that our store effects are greatly simplified - even eliminated.
 * Do we need to find a reason to keep effects?
 * Are they a critical part of the infrastructure, or just something we've become used to?
 *
 */

// Store actions:
// see: https://ngrx.io/guide/entity/adapter#adapter-collection-methods
// ADD_ALL
// UPSERT_ONE
// UPSERT_MANY
// REMOVE_ONE
// REMOVE_MANY

// Service actions:
// GET_ALL -> ADD_ALL
// GET_ONE -> UPSERT_ONE
// CREATE -> UPSERT_ONE
// UPDATE -> UPSERT_ONE
// MERGE -> UPSERT_MANY
// REMOVE -> REMOVE_ONE
// REMOVE_MANY -> REMOVE_MANY

export const AuthorActionTypes = {
  ADD_ALL: '[Author] Add All',
  UPSERT_ONE: '[Author] Upsert One',
  REMOVE_ONE: '[Author] Remove One',
};

export class AddAllAction extends PayloadAction {
  constructor(authors: Author[]) { super(AuthorActionTypes.ADD_ALL, authors); }
}

export class UpsertOneAction extends PayloadAction {
  constructor(author: Author) { super(AuthorActionTypes.UPSERT_ONE, author); }
}

export class RemoveOneAction extends PayloadAction {
  constructor(id: number) { super(AuthorActionTypes.REMOVE_ONE, id); }
}

export type AuthorAction =
  AddAllAction |
  UpsertOneAction |
  RemoveOneAction;
