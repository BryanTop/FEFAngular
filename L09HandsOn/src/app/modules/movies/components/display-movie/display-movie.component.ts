import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter();
  @Output() moviePoster: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    this.movieDeleted.emit(this.movie.id);
  }
  onViewPoster() {
    this.moviePoster.emit(this.movie.image_url);
  }
}
