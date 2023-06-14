import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

 @Input() product: Product = {
  id: '',
  name: '',
  price: 0,
  image: '',
 }


  constructor(){}
  ngOnInit(): void {

  }
}
