import { Component, inject, signal } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { single } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private service = inject(CommonService);
  shaowValue = signal<boolean>(true);
  number = signal<number>(0)
  arr: number[] = [];

  ngOnInit() {
    console.log('res');
    this.service.verifyData().subscribe((res: any) => {
      console.log(res);
    })
    this.oneto50();
    console.log(this.arr);

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
    // console.log(num);
    this.number.set(num)

  }
}
