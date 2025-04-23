import { Component, ElementRef, inject, input, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // themeRef = viewChild('')
  private auth = inject(AuthService);
  
  isDarkTheme = input(false)
  @ViewChild('theme') themeRef!: ElementRef;

  toggleTheme() {
    if (this.themeRef) {
      document.body.classList.toggle('dark')
      this.themeRef.nativeElement.classList.toggle('bi-lightning')
      this.themeRef.nativeElement.classList.toggle('bi-lightning-fill')
    }
  }

  logout() {
    this.auth.logout();
      }
}
