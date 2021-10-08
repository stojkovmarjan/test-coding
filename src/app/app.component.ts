import { Component } from '@angular/core';
import { Album } from './_models/album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-coding';
  selectedAlbum?: Album;


  albumSlected($event: Album){
    this.selectedAlbum = $event;
    
  }

  closeDetails(){
    this.selectedAlbum = undefined;
  }

}
