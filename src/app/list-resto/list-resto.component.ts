import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
collection:any=[];
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      this.collection=result;
    })
  }
  deleteResto(item:number){
    
      this.resto.deleteResto(item).subscribe((result)=>{
        window.location.reload()
      })
      
     
  }

}
