import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GamesService } from './games.service';
import { Game } from '../interfaces/game';

describe('GamesService', () => {
  let service: GamesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GamesService]
    });
    service = TestBed.inject(GamesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Deberia crear servicio Games', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener un array de datos desde la API', () => {
    const datosDeEjemplo: Game[] = [
      { 
        id: 1, title: 'Item 1', developer: 'Developer', 
        freetogame_profile_url: 'Text 1', game_url: 'Text 1', genre: 'Text 1',
        platform: 'Text 1', publisher: 'Text 1', release_date: 'Text 1',
        short_description: 'Text 1', thumbnail: 'TExt 1'
      },
      { 
        id: 1, title: 'Item 1', developer: 'Developer', 
        freetogame_profile_url: 'Text 1', game_url: 'Text 1', genre: 'Text 1',
        platform: 'Text 1', publisher: 'Text 1', release_date: 'Text 1',
        short_description: 'Text 1', thumbnail: 'TExt 1'
      }
    ];

    service.getGames().subscribe((games) => {
      expect(games).toEqual(datosDeEjemplo);
    });

    const req = httpTestingController.expectOne('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games');
    expect(req.request.method).toBe('GET');
    req.flush(datosDeEjemplo);
  });
});
