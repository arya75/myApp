import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApihandlingsService {
  //apiKey = '176499533cda4d2898b3ad3513075df5'
  constructor(private http: HttpClient) { }
    

  getApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  initSources(){
    return this.http
    .get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=176499533cda4d2898b3ad3513075df5')
  }

  initArticles(){
    return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=176499533cda4d2898b3ad3513075df5')
  }

  getArticlesbyId(source: String){
  return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=176499533cda4d2898b3ad3513075df5')
  }
}
