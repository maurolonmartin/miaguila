import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'map'
            },
            {
               path: 'map',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/map/map.module').then(
                    m => m.MapModule
                )
            },
            {
               path: 'flights',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/flights/flights.module').then(
                    m => m.FlightsModule
                )
            },
            {
               path: 'routes',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/routes/routes.module').then(
                    m => m.RoutesModule
                )
            },
            {
               path: 'manage',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/manage/manage.module').then(
                    m => m.ManageModule
                )
            },
            {
               path: 'statistics',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/statistics/statistics.module').then(
                    m => m.StatisticsModule
                )
            },
            {
               path: 'payments',
               pathMatch: 'full',
               loadChildren: () =>
                import('../../main/payment-methods/payment-methods.module').then(
                    m => m.PaymentMethodsModule
                )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
