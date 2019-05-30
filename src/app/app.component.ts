import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular1';

  ngOnInit() {
    const nums = of(1, 2, 3, 4);

    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log(x));
  }
}

