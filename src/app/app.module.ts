import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AppRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { UserListComponent } from './assignment-two/user-list/user-list.component';
import { UserFormComponent } from './assignment-two/user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        AssignmentOneComponent,
        AssignmentTwoComponent,
        UserFormComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        CommonModule,
        FlexLayoutModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        StoreModule.forRoot({ users: userReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
