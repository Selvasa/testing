import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private service = inject(AuthService);
  private router = inject(Router);
  private toster = inject(ToastrService);
  message = ''
  login = {
    email: '',
    password: ''
  };

  toLogIn(data: any) {
    this.service.login(data.value).subscribe((res: any) => {
      localStorage.setItem("token", res.token)
      this.toster.success(res?.msg, '', { positionClass: "toast-top-right", closeButton: true });
      this.router.navigateByUrl('home');
    }, (err: any) => {
      this.message = err?.error?.message;
      this.toster.error(this.message, '', { positionClass: "toast-top-right",closeButton: false });
    })

  }
}
