import { NewsItem } from './news-item';

export const NEWSITEMS: NewsItem[] = [
    {
        url: 'https://angular.io/docs',
        title: 'Introduction to the Angular Docs',
        publishedDate: new Date('2019-01-16'),
        lastUpdatedDate: new Date('2020-05-08'),
        author: {
            name: 'Angular Team',
            website: 'https://angular.io'
        }
    },
    {
        url: 'https://angular.io/guide/setup-local',
        title: 'Setting up the local environment and workspace',
        publishedDate: new Date('2016-03-16'),
        lastUpdatedDate: new Date('2020-04-03'),
        author: {
            name: 'Angular Team',
            website: 'https://angular.io'
        }
    },
    {
        url: 'https://blog.angular.io/version-9-1-of-angular-now-available-typescript-3-8-faster-builds-and-more-eb292f989428',
        title: 'Version 9.1 of Angular Now Available — TypeScript 3.8, faster builds, and more',
        publishedDate: new Date ('2020-03-25'),
        lastUpdatedDate: new Date ('2020-03-25'),
        author: {
            name: 'Stephen Fluin',
            website: 'https://fluin.io/'
        }
    }
]