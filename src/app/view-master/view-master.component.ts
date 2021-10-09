import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from '../_models/album';
import { AlbumsService } from '../_services/albums.service';

@Component({
  selector: 'app-view-master',
  templateUrl: './view-master.component.html',
  styleUrls: ['./view-master.component.css']
})
export class ViewMasterComponent implements OnInit {

  albums?: Album[];
  albumsSubscription?: Subscription;

  @Output()
   albumSelected: EventEmitter<Album> = new EventEmitter<Album>();

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsSubscription = this.albumsService.getAlbums().subscribe(
      response => {
        this.albums = response.slice(0,10);
        console.log(this.albums);
      }, error => console.log(error)
    )
  }

  details(album: Album){
    //console.log(album);
    this.albumSelected.emit(album);
  }

  ngOnDestroy(): void {
    this.albumsSubscription?.unsubscribe();
  }

}
