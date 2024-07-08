import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = {
        id: 1,
        title: 'Thor - Love and thunder',
        description: 'The film follows Thor (Chris Hemsworth) on a journey unlike anything he has faced before: a search for inner peace.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOyZD9CL1eGq1pKq4tPcXp6KX-iw5J2krnA&s',
        duration: '160 min',
        genre: 'Action',
        type: ''
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

  it('should toggle Watch', () => {
    expect(component.toggleWatch);
  })

  it('should toggle Hide', () => {
    expect(component.toggleHide);
  })
});
