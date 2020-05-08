import { NewsItem } from './news-item';

export const NEWSITEMS: NewsItem[] = [
    {
        url: 'https://angular.io/docs',
        title: 'Introduction to the Angular Docs',
        publishedDate: 'January 1, 2015',
        lastUpdatedDate: 'May 8, 2020',
        author: {
            name: 'Angular Team',
            website: 'https://angular.io'
        }
    },
    {
        url: 'https://angular.io/guide/setup-local',
        title: 'Setting up the local environment and workspace',
        publishedDate: 'March 13, 2016',
        lastUpdatedDate: 'April 3, 2020',
        author: {
            name: 'Angular Team',
            website: 'https://angular.io'
        }
    },
    {
        url: 'https://blog.angular.io/version-9-1-of-angular-now-available-typescript-3-8-faster-builds-and-more-eb292f989428',
        title: 'Version 9.1 of Angular Now Available — TypeScript 3.8, faster builds, and more',
        publishedDate: 'March 25, 2020',
        lastUpdatedDate: 'March 25, 2020',
        author: {
            name: 'Stephen Fluin',
            website: 'https://fluin.io/'
        }
    }
]