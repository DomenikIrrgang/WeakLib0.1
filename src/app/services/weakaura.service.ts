import { Injectable } from '@angular/core';
import { Weakaura } from '../weakaura';
import { WEAKAURAS } from '../mockdata/weakaura';

@Injectable()
export class WeakauraService {
    getLatestWeakauras(): Promise<Weakaura[]> {
        return Promise.resolve(WEAKAURAS);
    }
/*
    getHero(id: number) : Promise<Hero> {
        return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
*/
}