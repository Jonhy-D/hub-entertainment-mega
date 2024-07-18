import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return items', (done) =>{
    service.getItems().subscribe(items =>{
      expect(items.length).toEqual(10);
      expect(items[3].genre).toEqual('Sci-Fi');
      done();
    })
  });
});
