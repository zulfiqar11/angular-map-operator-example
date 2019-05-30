import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Test';

  ngOnInit() {

    const mynums = of (1, 2, 3, 4, 5 , 6)
                      .pipe(
                        filter(n => n % 2 == 0 ),
                        map(n => n * 2)
                      )
                      .subscribe(
                        x => {
                          console.log(x);
                        }
                      );

  }
}

