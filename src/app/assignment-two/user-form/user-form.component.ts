import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { addUser, updateUser } from '../../actions/users.action';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() currentUser: User | null = null;
  user: User = { id: '', name: '', email: '', age: 0 };
  isEditMode = false;
  userForm!: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]]
    });
    if (this.currentUser) {
      this.user = { ...this.currentUser };
      this.isEditMode = true;
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.isEditMode) {
        this.store.dispatch(updateUser({ userId: this.user.id, updatedUser: this.user }));
      } else {
        this.userForm.value.id = (100 + Math.random() * 900).toString();
        this.store.dispatch(addUser({ user: this.userForm.value }));
        this.resetForm();
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.userForm.reset();
    this.isEditMode = false;
  }
}
