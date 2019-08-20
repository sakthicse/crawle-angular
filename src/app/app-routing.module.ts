import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CrawlerComponent } from './crawler/crawler.component';

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
      path: 'crawler',
      component:CrawlerComponent
    }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
