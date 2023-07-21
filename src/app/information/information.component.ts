import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../services/games.service';
import { GameInfo } from '../interfaces/game';
import SwiperCore, { FreeMode, SwiperOptions } from 'swiper';
SwiperCore.use([FreeMode]);

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  gameId: any = 0;

  game!: GameInfo;

  config: SwiperOptions={
    slidesPerView: 1.5,
    freeMode: true,
    spaceBetween: 10,
  }
  
  constructor( private route: ActivatedRoute, private gamesService: GamesService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
      this.gameId = params.get('id');
    });

    this.getInformatioGame();
  }

  getInformatioGame() {
    this.gamesService.getGameInfo( this.gameId ).subscribe( (game) => {
      console.log(game);
      this.game = game;
    });
  }

}
