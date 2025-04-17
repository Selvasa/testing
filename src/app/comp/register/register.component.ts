import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { provideToastr, ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private service = inject(AuthService);
  private toastr = inject(ToastrService)
  private route = inject(Router)

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  toSignUp() {
    this.service.register(this.registerForm.value).subscribe((res: any) => {
      this.toastr.success(res.message, "", { positionClass: "toast-top-right" });
      this.route.navigateByUrl("login")
    }, (err) => {
      this.toastr.error(err?.error?.message, '', { positionClass: "toast-top-right" });
    })

  }

}
