import { Component, OnInit } from '@angular/core';

import { Weakaura } from '../weakaura';
import { News } from '../news';

import { WeakauraService } from '../services/weakaura.service';
import { NewsService } from '../services/news.service';

@Component({
    selector: `my-dashboard`,
    templateUrl: `./dashboard.component.html`,
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    latestWeakauras: Weakaura[] = [];
    popularWeakauras: Weakaura[] = [];
    news: News[] = [];

    constructor(private weakauraService: WeakauraService, private newsService: NewsService) { }

    ngOnInit() : void {
        this.weakauraService.getLatestWeakauras().then(weakauras => this.latestWeakauras = weakauras.slice(0,5));
        this.weakauraService.getLatestWeakauras().then(weakauras => this.popularWeakauras = weakauras.slice(5,10));
        this.newsService.getNews().then(news => this.news = news);
    }

    timeSinceUpload(weakaura: Weakaura) : number {
        return Date.now() - weakaura.upload.valueOf();
    }
}