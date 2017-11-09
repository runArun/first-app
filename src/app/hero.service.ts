import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()//不要忘了写圆括号！如果忘了写，就会导致一个很难诊断的错误。

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }//Update the HeroService with this Promise-returning getHeroes() method:

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

}

//You defined the HeroService as a provider for the AppComponent.
