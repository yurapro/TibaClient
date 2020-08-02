import { Component, OnInit } from '@angular/core';
import { Favorit } from 'src/app/_models/favorit';
import { FavoritService } from 'src/app/_services/favorit.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FavoritService ]
})
export class HomeComponent implements OnInit {

  constructor(private favoritService: FavoritService) { }

  listFavorites: Array<Favorit> = new Array<Favorit>();

  ngOnInit() {
    this.favoritService.getFavorites().subscribe(x => {
      debugger;
      x.map(f => this.listFavorites = x);
    });
  }

  Update(value: string) {

    debugger;

    let model: Favorit = { name : value , repository: value};

    this.favoritService.addFavorit(model).subscribe(x => {

      if(x) {
        this.listFavorites.unshift(model);
      }
    });
  }
}
