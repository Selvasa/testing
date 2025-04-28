import { Component, inject, signal } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { single } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustDir } from '../../directives/custone.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, CustDir],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private service = inject(CommonService);
  shaowValue = signal<boolean>(true);
  number = signal<number>(0)
  arr: number[] = [];

  ngOnInit() {
    this.service.verifyData().subscribe((res: any) => {
    })
    this.oneto50();

  }

  approved(res: boolean) {
    this.shaowValue.set(res)
  }
  rejected(res: boolean) {
    this.shaowValue.set(res)
  }

  oneto50() {
    for (let i = 1; i <= 50; i++) {
      this.arr.push(i)
    }
  }
  calculate(num?: any) {
    this.number.set(num)

  }
}
