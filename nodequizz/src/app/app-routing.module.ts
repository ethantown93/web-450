import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guards';

const routes : Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

];

// export const routes: Routes = [
//   {
//     path: 'dashboard',
//     component: BaseLayoutComponent,
//     children: [
//       {
//         path: '',
//         component: DashboardComponent,
//         canActivate: [AuthGuard]
//       },
//       // {
//       //   path: 'cumulative-summary',
//       //   component: CumulativeSummaryComponent,
//       //   canActivate: [AuthGuard]
//       // }
//     ]
//   },
//   {
//     path: 'session',
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent
//       },
//       {
//         path: 'not-found',
//         component: ErrorNotFoundComponent
//       }
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: 'session/not-found'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
