import { Component, OnInit } from '@angular/core';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  constructor() {
    this.usuario = new Usuario('Juanjo','palija','juanjuPajela@gmail.com','https://i.pinimg.com/736x/d2/95/b0/d295b08a39efbf3287ae88cabb94971c--avatar-game.jpg');
   }

  ngOnInit() {
  }

}
