import { NEWSITEMS } from './mock-newsitems';
import { NewsItem } from './news-item';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNews';

  // newsItem: NewsItem = {
  //   url: 'https://angular.io/docs',
  //   title: 'Introduction to the Angular Docs',
  //   publishedDate: 'January 1, 2015',
  //   lastUpdatedDate: 'May 8, 2020',
  //   author: {
  //     name: 'Angular Team',
  //     website: 'https://angular.io'
  //   }
  // };

  newsItems = NEWSITEMS;

}
