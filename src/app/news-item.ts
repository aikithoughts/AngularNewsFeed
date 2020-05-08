import { NewsAuthor } from './news-author';
export interface NewsItem {
    url?: string;
    title?: string;
    publishedDate?: string;
    lastUpdatedDate?: string;
    author?: NewsAuthor;
}
