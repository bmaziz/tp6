import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectedproduct',
  templateUrl: './selectedproduct.component.html',
  styleUrls: ['./selectedproduct.component.css']
})
export class SelectedproductComponent implements OnInit{
  idProduct!:number;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.idProduct=this.activatedRoute.snapshot.params['identif'];
  }
  
}
