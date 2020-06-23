import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums;
  constructor(private photoService:PhotosService) { }

  ngOnInit(): void {
    this.albums = this.photoService.getAlbums();
  }

}
