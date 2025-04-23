import { Component, inject } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-support',
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  private service = inject(CommonService)
  ngOnInit() {
    console.log('res');
    this.service.verifyData().subscribe((res: any) => {
      console.log(res);

    })
  }
}
