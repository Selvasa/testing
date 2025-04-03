import { Component, ElementRef, input, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // themeRef = viewChild('')
  isDarkTheme = input(false)
  @ViewChild('theme') themeRef!: ElementRef;

  toggleTheme() {
    if (this.themeRef) {
      document.body.classList.toggle('dark')
      this.themeRef.nativeElement.classList.toggle('bi-lightning')
      this.themeRef.nativeElement.classList.toggle('bi-lightning-fill')
    }
  }
}
