import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nursery',
  templateUrl: './nursery.component.html',
  styleUrls: ['./nursery.component.scss']
})
export class NurseryComponent implements OnInit {
  nurseryData: Array<object>;
  closeResult: string;
  term: string;

  constructor(private q:QueryService, private modalService: NgbModal) {
    this.nurseryData=[];
    this.getnurseryData();
   }

  getnurseryData():void{
    let path:string='./assets/nursery.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.nurseryData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

}
