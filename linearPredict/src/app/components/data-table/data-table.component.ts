import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
    @Input() data: any;
    @Output() onValuesChange: EventEmitter<any> = new EventEmitter<any>();
    
    public changeValues(event, index, xy) {
        try {
            this.data[index][xy] = parseFloat(event.target.value);
            this.onValuesChange.emit(this.data);
        } catch (err) {
            console.log("This value is incorrect.");
        }       
    }
}