import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';
@Component({
  selector: 'app-media-books',
  templateUrl: './media-books.component.html',
  styleUrls: ['./media-books.component.scss']
})
export class MediaBooksComponent implements OnInit {
  booksdata: Array<object>;
  constructor(
    private q:QueryService , 
    private modalService: NgbModal
  ) { 
    this.booksdata=[];
    this.getDrData();
  }

  getDrData(): void{
    let path: string = './assets/mediaBooks.json';
    this.q.getData(path).subscribe(
      res => {
        this.booksdata = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }



  ngOnInit() {
  }

}
