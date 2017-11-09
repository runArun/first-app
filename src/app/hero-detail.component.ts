// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from "./hero";

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']


})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))//The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.


      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero; //通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性。
}



