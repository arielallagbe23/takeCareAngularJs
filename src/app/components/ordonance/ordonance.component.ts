import { Component, OnInit } from '@angular/core';
import { Ordonance } from 'src/app/ordonance';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-ordonance',
  templateUrl: './ordonance.component.html',
  styleUrls: ['./ordonance.component.css']
})
export class OrdonanceComponent implements OnInit {

  ordonances:any;
  ordonance = new Ordonance();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  insertData() {
    this.dataService.insertData(this.ordonance).subscribe(res => {
       console.log(res);
    })
  }

}
