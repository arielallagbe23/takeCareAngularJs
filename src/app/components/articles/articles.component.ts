import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:any;
  

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getArticlesData()
  }

  getArticlesData() {
      this.dataService.getData().subscribe(res => {
        this.articles = res;
      });
  }

}
