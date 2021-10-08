import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../_models/album';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  @Input() album?: Album;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.album) {
      console.log(this.album);
    }
  }

  closeDetails() {
    this.close.emit();
  }

}
