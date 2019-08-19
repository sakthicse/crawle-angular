import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrawleComponent } from './crawle/crawle.component';

const routes: Routes = [
 	 {
        path: "",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
    },
     {
        path: "home",
        component: HomeComponent
    },
    {
      path: 'crawle',
      component:CrawleComponent
    }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
