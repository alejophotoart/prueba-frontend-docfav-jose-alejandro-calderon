import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('filterByGenre') filterByGenre!: ElementRef;
  @ViewChild('filterByPlatform') filterByPlatform!: ElementRef;

  games: Game[] = [];
  result: Game[] = [];

  filterTerm: any;

  genres = [
    'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 
    'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 
    'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 
    'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale',
    'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting',
    'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec',
    'tower-defense', 'horror', 'mmorts'
  ];

  platforms = ['pc', 'browser', 'all'];

  constructor( private gamesService: GamesService, private router: Router ) { }

  ngOnInit(): void {
      this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe( (resp) => {
      this.games = resp;
      this.result = resp;
    });
  }

  showInfoGame( id: number ) {
    this.router.navigate( ['/information', id] );
  }

  filterByTag() {
    const genre = this.filterByGenre.nativeElement.value;
    const platform = this.filterByPlatform.nativeElement.value;

    //Opcion 1 de filtrado (Sin necesidad de usar la API)
    // this.games = this.result.filter( (g) => g.platform.toLowerCase().indexOf(platform) > -1 && g.genre.toLowerCase().indexOf(genre) > -1 );

    //Opcion 2 de filtrado (Usando la API)

    this.gamesService.filterGames(genre, platform).subscribe( (games) => {
      this.games = games;
    });
  }

  clearFilters() {
    this.filterByGenre.nativeElement.value = '';
    this.filterByPlatform.nativeElement.value = '';
    
    this.getGames();
  }
}
