import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: 'customer-app',
        component: LayoutComponent,
        children: [
            {
                path: 'users',
                loadChildren: () => import('../../user/user-list/user.module').then(m => m.UserModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('../../dashboard/dashboard/dashboard.module').then(m => m.DashboardModule),
            }
        ]

    }
];

@NgModule({

    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]

})

export class LayoutRoutingModule { }