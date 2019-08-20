import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { CrawlerService } from '../services/crawler/crawler.service';
@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.css']
})
export class CrawlerComponent implements OnInit {

  crawleForm: FormGroup;
  formErrors:any=[];
  hrefs:any=[];
  images:any=[];
  constructor(private auth:AuthService,public cs:CrawlerService) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.crawleForm = new FormGroup({
      url: new FormControl('', [Validators.required, Validators.pattern(reg)]),
      level:new FormControl('',[Validators.required, Validators.min(1), Validators.max(3)]),
      });
   }

  ngOnInit() {
  }



  /** 
   mothod to post crawler
  **/
  postCrawler(){
    this.cs.post(this.crawleForm.value,'/crawler-site/crawler/').subscribe((data)=>{
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
