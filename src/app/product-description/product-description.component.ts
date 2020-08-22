import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(
      response => console.log(response)
    );
    this._productService.getAlbum(1).subscribe(
      (response) => {
        this.albumInfo = response;
        console.log(response);
      },
      // tslint:disable-next-line: no-shadowed-variable
      (error) => {
        console.log(error);
      }
    );
  }
}
