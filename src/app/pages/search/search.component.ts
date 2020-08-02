import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GithubService } from 'src/app/_services/github.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ GithubService ]
})
export class SearchComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  private searchLoading: boolean;

  @Output() Selected: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    
  }

  addFavorit(value: any) {
    debugger;
    this.Selected.emit(value);
  }

  onInputValue(value: any) {

    const filterValue: string = value.toLowerCase()

    this.githubService.getRepositories(filterValue).subscribe((git) => {
      this.searchLoading = true;
      this.options = git.items.map(x => x.name);
      
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.options)
      );

    },
    error => {
      this.searchLoading = false;
      console.log(error);
    })
  }
}
