import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPedidoPage } from '../modal-pedido/modal-pedido.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async openModal(){
   const modal = await this.modalCtrl.create({
      component: ModalPedidoPage
    });
   await modal.present();
  }

}
