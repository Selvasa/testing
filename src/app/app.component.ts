import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./comp/nav/nav.component";

@Component({
  selector: "app-root",
  imports: [NavComponent,RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = 'testing';
  constructor() {

  }
}
