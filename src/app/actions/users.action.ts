import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const addUser = createAction(
    '[User] Add User',
    props<{ user: User }>()
);

export const updateUser = createAction(
    '[User] Update User',
    props<{ userId: string, updatedUser: Partial<User> }>()
);

export const deleteUser = createAction(
    '[User] Delete User',
    props<{ userId: string }>()
);