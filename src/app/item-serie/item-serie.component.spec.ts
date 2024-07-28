import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSerieComponent } from './item-serie.component';

describe('ItemSerieComponent', () => {
  let component: ItemSerieComponent;
  let fixture: ComponentFixture<ItemSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
