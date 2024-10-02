import { Routes } from '@angular/router';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/assignment-one',
        pathMatch: 'full',
    },
    {
        path: 'assignment-one',
        component: AssignmentOneComponent,
    },
    {
        path: 'assignment-two',
        component: AssignmentTwoComponent,
    }
];
