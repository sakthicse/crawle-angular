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
    this.crawleForm = new FormGroup({
      url: new FormControl('', [Validators.required]),
      level:new FormControl('',[Validators.required]),
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
