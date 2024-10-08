import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = {
        movieId: 1,
        movie_title: 'Thor - Love and thunder',
        movie_description: 'The film follows Thor (Chris Hemsworth) on a journey unlike anything he has faced before: a search for inner peace.',
        movie_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOyZD9CL1eGq1pKq4tPcXp6KX-iw5J2krnA&s',
        movie_duration: '160 min',
        movie_genre: 'Action',
      }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Thor - Love and thunder')
  })

  it('should create an image', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy()
  })

  it('should render duration', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span')?.textContent).toContain('160 min')
  })

  it(`should have show an alert`, () => {
    const compiled = fixture.componentInstance;
    expect(compiled.toggleHide()).toBeTruthy()
  })

  it(`should have hide the element`, () => {
    const compiled = fixture.componentInstance;
    expect(compiled.toggleWatch).toBeTruthy()
  });
});
