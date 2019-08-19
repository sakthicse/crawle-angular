import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { CrawleService } from '../services/crawle/crawle.service';
@Component({
  selector: 'app-crawle',
  templateUrl: './crawle.component.html',
  styleUrls: ['./crawle.component.css']
})
export class CrawleComponent implements OnInit {

  crawleForm: FormGroup;
  formErrors:any=[];
  hrefs:any=[];
  images:any=[];
  constructor(private auth:AuthService,public cs:CrawleService) {
    this.crawleForm = new FormGroup({
      url: new FormControl('', [Validators.required]),
      level:new FormControl('',[Validators.required]),
      });
   }

  ngOnInit() {
  }
  postCrawlet(){
    this.cs.post(this.crawleForm.value,'/crawle-site/crawle/').subscribe((data)=>{
      if(data.hasOwnProperty('href_links')){
        this.hrefs =  data['href_links'];
      }
      if(data.hasOwnProperty('image_urls')){
        this.images =  data['image_urls'];
      }

    },(err)=>{

    });
  }

}
