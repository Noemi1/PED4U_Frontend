import { Injectable } from "@angular/core";
import { MenuItem } from "primeng/api";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Breadcrumb {
    items = new BehaviorSubject<MenuItem[]>([]);

    constructor() {

    }

}
