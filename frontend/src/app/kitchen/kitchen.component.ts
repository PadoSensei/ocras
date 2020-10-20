import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service'


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getOrders();
    
 }
  orders

  getOrders = () => {
    this.crudService.getOrders()
        .subscribe(res => {
        this.orders = res.map((snapshot) => (snapshot.payload.doc.data()));
        console.log(this.orders)
  })
  }
  
  createNewOrders(): void {
    const orders = this.crudService.createNewOrder();
    console.log(orders)
  }

  toggleServed = (event) => {
    console.log(event)
    //this.crudService.createNewOrder()
  }
  
}
