import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Works } from './works/works';
import { WorksStart } from './works/works-start/works-start';
import { MonthDetails } from './works/month-details/month-details';
import { MonthEdit } from './works/month-details/month-edit/month-edit';

const appRoutes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  {
    path: 'works',
    component: Works,
    children: [
      { path: '', component: WorksStart },
      {
        path: ':monthId',
        component: MonthDetails,
        children: [
          { path: 'new', component: MonthEdit },
          { path: ':workId/edit', component: MonthEdit },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
