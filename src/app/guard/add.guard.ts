import { CanActivateFn } from '@angular/router';

export const addGuard: CanActivateFn = (route, state) => {
  console.log(route);
  
  return true;
};
