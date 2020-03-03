import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from 'src/app/shared/models/music';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {

  private musicRoute = 'http://localhost:3000/music';
  public music: Music[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetMusic();
  }

  GetMusic() {
    this.http.get<Music[]>(this.musicRoute).subscribe(res => {
      this.music = res;
    });
  }

}
