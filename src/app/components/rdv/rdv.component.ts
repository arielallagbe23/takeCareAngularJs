import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Rdv } from 'src/app/rdv';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  rdvs:any;
  rdv = new Rdv();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  insertData1() 
  {
      this.dataService.insertData1(this.rdv).subscribe(res => {
      console.log(res);
    })
  }

}
