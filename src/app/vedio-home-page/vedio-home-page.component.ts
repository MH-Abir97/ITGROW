import { Component } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'home-page',
  templateUrl: './vedio-home-page.component.html',
  styleUrls: ['./vedio-home-page.component.css']
})
export class VedioHomePageComponent {

  VedioList:any=[];
  vedioViewLink:any={};
  displayURL:any="";

  constructor(private _apiService:APIServiceService) {


  }

  ngOnInit(): void{
   this.getAll();
  }



  getAll(){
    this._apiService.GetAll().subscribe((aData)=>{
      console.log(aData);
      this.VedioList=aData;
    })
  }
  OnVedioOpen(obj:any){
    this.vedioViewLink=obj;
    // this.displayURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=TcGHKrh8J8I");
  }

}
