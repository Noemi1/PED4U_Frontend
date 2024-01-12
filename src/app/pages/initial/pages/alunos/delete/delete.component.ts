import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
    visible = true;
    loading = false;
    id: number = 0;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }

    voltar() {
        this.visible = false;
        setTimeout(() => {
            this.router.navigate(['../../'], { relativeTo: this.route })
        }, 300);
    }
}
