import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListSeriesComponent } from './item-list-series.component';

describe('ItemListSeriesComponent', () => {
  let component: ItemListSeriesComponent;
  let fixture: ComponentFixture<ItemListSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
