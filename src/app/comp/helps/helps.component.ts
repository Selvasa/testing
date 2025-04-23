import { Component, inject } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-helps',
  imports: [],
  templateUrl: './helps.component.html',
  styleUrl: './helps.component.css'
})
export class HelpsComponent {
  private service = inject(CommonService)
  ngOnInit() {
    console.log('res');
    this.service.verifyData().subscribe((res: any) => {
      console.log(res);

    })
  }
}
