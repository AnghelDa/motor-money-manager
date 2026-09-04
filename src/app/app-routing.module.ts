import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Works } from './works/works';

import { MonthDetails } from './works/month-details/month-details';
import { MonthEdit } from './works/month-details/month-edit/month-edit';
import { MonthsResolverService } from './works/months-resolver.service';
import { AuthComponent } from './auth.component/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  {
    path: 'works',
    component: Works,
    children: [
      {
        path: ':monthId',
        component: MonthDetails,
        resolve: [MonthsResolverService],
        children: [
          { path: 'new', component: MonthEdit, resolve: [MonthsResolverService] },
          { path: ':workId/edit', component: MonthEdit, resolve: [MonthsResolverService] },
        ],
      },
    ],
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
