import { environment } from './../../../../environments/environment';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let HttpClientTestingModule: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.get(HttpClientTestingModule);
    httpTestingController = TestBed.get(httpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('test for getAllProducts', ()=>{
    it('should return products', ()=>{

    const expecData = [
      {
        id: '1',
        title: 'assa',
        price: 1222,
        description: 'asass',
        image: 'img/img.jpg',
      },
      {
        id: '1',
        title: 'assa',
        price: 1222,
        description: 'asass',
        image: 'img/img.jpg',
      },
    ];
    let dataError, dataResponse: any;
    //act
    service.getAllProducts().subscribe(response=>{
      dataResponse = response;
    },
    error =>{
      dataError = error;
    });
    const req = httpTestingController.expectOne(`${environment.url_api}/products`);
    req.flush(expecData);
    //assert
    expect(dataResponse.length).toEqual(2);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
    });
  });
});
