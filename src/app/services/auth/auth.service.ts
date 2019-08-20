import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClientCustomService } from '../http-client-custom/http-client-custom.service';

const API_URL = environment.apiBase;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router,public cus_http : HttpClientCustomService) { }


  login(data){
    // api-token-auth/
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.cus_http.post("/api-token-auth/", data).subscribe((data) => {


      console.log("*********************");
      console.log(data['token']);
      var currentAuth={"access_token":data['token']}
                //  localStorage.setItem('currentUser', JSON.stringify(data));
      localStorage.setItem('currentAuth', JSON.stringify(currentAuth));
      this.router.navigateByUrl('/home');
    }, (err)=>{
          this.router.navigateByUrl('/login');
          console.log(err);
          });
  }
    

    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentAuth');
      localStorage.removeItem('currentUser');
      
    }
    token() {
      const token = JSON.parse(localStorage.getItem('currentAuth'));
      if(token)
      {
        return true;
      }else{
        return false;
      }
    }
    user() {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if(user)
      {
        if(!user.user_profile){
          user.user_profile={"is_superuser":false};
        }
        return user;
      }else{
        return false;
      }
    }
   
}
