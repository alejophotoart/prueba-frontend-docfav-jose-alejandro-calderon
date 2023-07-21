import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { InformationComponent } from './information.component';
import { SwiperModule } from 'swiper/angular';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SwiperModule],
      declarations: [ InformationComponent ],
      providers: [
        // Asegúrate de proporcionar ActivatedRoute
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 'id' } } } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente Informacion de juegos', () => {
    expect(component).toBeTruthy();
  });

});
