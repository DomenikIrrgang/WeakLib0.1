import { Injectable } from '@angular/core';
import { News } from '../news';
import { NEWS } from '../mockdata/news';

@Injectable()
export class NewsService {
    getNews(): Promise<News[]> {
        return Promise.resolve(NEWS);
    }
/*
    getHero(id: number) : Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
*/
}