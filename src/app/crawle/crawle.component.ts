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
      this.hrefs= [
        "https://success4.us/home",
        "https://success4.us/home",
        "https://success4.us/features",
        "https://success4.us/team",
        "https://success4.us/contact",
        "https://success4.us/blog",
        "https://success4.us/whats-new",
        "https://success4.us/free-trial",
        "https://success4.us/request-demo",
        "https://success4.us/case-study/modern-it-operations-management-company",
        "https://success4.us/case-study/modern-it-operations-management-company",
        "https://success4.us/case-study/fortune-500-network-and-data-storage-company",
        "https://success4.us/case-study/fortune-500-network-and-data-storage-company",
        "https://success4.us/case-study/fortune-100-networking-hardware-and-software-company",
        "https://success4.us/case-study/fortune-100-networking-hardware-and-software-company",
        "https://success4.us/contact#contact",
        "https://success4.us/request-demo",
        "https://success4.usmailto:sales@success4.us",
        "https://success4.us/features",
        "https://success4.us/team",
        "https://success4.us/blog",
        "https://success4.us/contact",
        "https://success4.us/privacy-policy",
        "https://success4.us/terms-and-conditions",
        "https://success4.us/home",
        "https://success4.us/home",
        "https://success4.us/features",
        "https://success4.us/team",
        "https://success4.us/contact",
        "https://success4.us/blog",
        "https://success4.us/whats-new",
        "https://success4.us/free-trial",
        "https://success4.us/request-demo",
        "https://success4.us/case-study/modern-it-operations-management-company",
        "https://success4.us/case-study/modern-it-operations-management-company",
        "https://success4.us/case-study/fortune-500-network-and-data-storage-company",
        "https://success4.us/case-study/fortune-500-network-and-data-storage-company",
        "https://success4.us/case-study/fortune-100-networking-hardware-and-software-company",
        "https://success4.us/case-study/fortune-100-networking-hardware-and-software-company",
        "https://success4.us/contact#contact",
        "https://success4.us/request-demo",
        "https://success4.usmailto:sales@success4.us",
        "https://success4.us/features",
        "https://success4.us/team",
        "https://success4.us/blog",
        "https://success4.us/contact",
        "https://success4.us/privacy-policy",
        "https://success4.us/terms-and-conditions"
    ]
    this.images = [
      "https://success4.us/../img/success4_logo.png",
      "https://success4.us/img/arrow.png",
      "https://success4.us/img/arrow.png",
      "https://success4.us/img/arrow.png",
      "https://success4.us/img/Hover-Understand.png",
      "https://success4.us/img/Understand.png",
      "https://success4.us/img/Hover-Engage.png",
      "https://success4.us/img/Engage.png",
      "https://success4.us/img/Hover-Grow.png",
      "https://success4.us/img/Grow.png",
      "https://success4.us/img/Hover-Retain.png",
      "https://success4.us/img/Retain.png",
      "https://success4.us/img/Hover-Grow.png",
      "https://success4.us/img/Grow.png",
      "https://success4.us/img/arrow.png",
      "https://success4.us/img/Easy_.png",
      "https://success4.us/img/Easy_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/Secure_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/Secure_.png",
      "https://success4.us/img/Secure_.png",
      "https://success4.us/img/Intelligent_.png",
      "https://success4.us/img/Intelligent_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Deployment_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Import_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/Playbooks_.png",
      "https://success4.us/img/success-footer.PNG",
      "https://success4.us/img/icon-email.png",
      "https://success4.us/img/icon-twitter.png",
      "https://success4.us/img/icon-linkedin.png",
      "https://success4.us/img/icon-youtube.png"
  ]
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
