import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApihandlingsService } from '../services/apihandlings/apihandlings.service';
import { SnackbarService } from '../services/snackbar/snackbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  getposts: [];
  mArticles:Array<any>;
  mSources:Array<any>;
  
 

  constructor(private _apiHandlingService: ApihandlingsService , private router:Router,
    private snackbarservice: SnackbarService  ) { }

  ngOnInit() {

    // this.NewsArticles()
  }

  getdata(){
    this._apiHandlingService.getApi().subscribe((data:[])=>{
      this.getposts = data
    })
  }

  NewsArticles(){
    this._apiHandlingService.initArticles().subscribe(data => this.mArticles = data['articles'])
  }

  NewsSources(){
    this._apiHandlingService.initSources().subscribe(data=>this.mSources = data['sources'])
    this.router.navigate(['/about'])
  
  }

}
