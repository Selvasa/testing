import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const addGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const token = localStorage.getItem("token");
  console.log("token",token);
  
  if (!token) {
    router.navigateByUrl('login');
    return false;
  }
  else {
    return true
  }
};
