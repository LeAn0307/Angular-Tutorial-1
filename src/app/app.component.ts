import { Component } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'angular-heroes';
  //EXample
  isDisabled=true;
  constructor(public TestService: TestService)
  {
    console.log("App component");
  }
}
