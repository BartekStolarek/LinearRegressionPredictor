import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  ngOnInit() {
    this.data = [
      { x: 100, y: 5 },
      { x: 110, y: 5.3 },
      { x: 120, y: 6.3 },
      { x: 130, y: 6.7 },
      { x: 140, y: 7.1 },
      { x: 150, y: 8 },
      { x: 160, y: 8.7 }
    ];
  }

  public updateDataset(data: any) {
    this.data = data;
    this.data = this.data.slice();
  }  
}
