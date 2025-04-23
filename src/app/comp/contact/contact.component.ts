import { Component, inject } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private service = inject(CommonService)
  ngOnInit() {
    console.log('res');
    this.service.verifyData().subscribe((res: any) => {
      console.log(res);

    })
  }
}
