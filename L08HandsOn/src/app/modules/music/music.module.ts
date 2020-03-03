import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMusicComponent } from './display-music/display-music.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DisplayMusicComponent
  ],
  declarations: [DisplayMusicComponent]
})
export class MusicModule { }
