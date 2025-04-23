import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { NavComponent } from "./comp/nav/nav.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [ RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = 'testing';
  isShowNav = true;
  constructor(private router: Router) {
  }
  ngDoCheck() {
    if (this.router.url === "/login" || this.router.url === "/register") {
      this.isShowNav = false;
    }
    else{
      this.isShowNav=true
    }
  }
}
