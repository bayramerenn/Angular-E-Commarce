import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() totalCount:number;
  @Input() pageSize:number;
  @Output() pageChanged = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onPagerChanged(event:any){
    console.log(event.page)
    this.pageChanged.emit(event.page);
    
  }
}
