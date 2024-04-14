import { Component, OnInit } from '@angular/core';  
import { ACTIVITY_DATA } from '../other/data';
  

@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.scss']  
})  
export class DashboardComponent implements OnInit {  
  displayedColumns: string[] = ['athlete', 'name', 'distance', 'elapsed_time', 'type'];  
  dataSource = ACTIVITY_DATA;  
  
  constructor() { }  
  
  ngOnInit(): void {  
  }  
}  
