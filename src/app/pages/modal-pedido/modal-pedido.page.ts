import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.page.html',
  styleUrls: ['./modal-pedido.page.scss'],
})
export class ModalPedidoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }

}
