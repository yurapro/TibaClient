import { Component, OnInit, Input } from '@angular/core';
import { Favorit } from 'src/app/_models/favorit';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  @Input() listFavorit: Array<Favorit> = new Array<Favorit>();

  ngOnInit() {
  }
}
