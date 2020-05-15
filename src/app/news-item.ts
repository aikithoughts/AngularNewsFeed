import { NewsAuthor } from './news-author';
export interface NewsItem {
    url: string;
    title: string;
    publishedDate: Date;
    lastUpdatedDate: Date;
    author: NewsAuthor;
}
