import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { addUser, deleteUser, updateUser } from '../actions/users.action';

export interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: []
};

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => ({
        ...state,
        users: [...state.users, user]
    })),
    on(updateUser, (state, { userId, updatedUser }) => ({
        ...state,
        users: state.users.map((user) =>
            user.id === userId ? { ...user, ...updatedUser } : user
        )
    })),
    on(deleteUser, (state, { userId }) => ({
        ...state,
        users: state.users.filter((user) => user.id !== userId)
    }))
);