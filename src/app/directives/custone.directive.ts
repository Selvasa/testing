import { Directive, ElementRef, inject, input, output } from "@angular/core";
import { single } from "rxjs";

@Directive({
    selector: "[dir]",
    host: { '(click)': 'myfun()' }
})
export class CustDir {
    num = input<number>(0);
    divby = input<number>(0);
    emitData = output<number>();
    ref = inject(ElementRef)
    myfun() {
        this.emitData.emit(this.num())
    }
}