import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { deleteUser } from '../../actions/users.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  users: Array<User> = [];
  displayedColumns: Array<string> = ['action', 'name', 'email', 'age'];
  constructor(private store: Store<{ users: User[] }>) {
    store.select('users').subscribe((data: any) => {
      this.users = data.users;
    });
  }

  onDelete(userId: string) {
    this.store.dispatch(deleteUser({ userId }));
  }

  onEdit(user: User) {
    // Emit event to parent or use @Input() to handle edit functionality
  }
}