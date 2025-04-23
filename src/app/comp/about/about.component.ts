import { Component, inject } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private service = inject(CommonService)
  ngOnInit() {
    console.log('res');
    this.service.verifyData().subscribe((res: any) => {
      console.log(res);

    })
  }
}
