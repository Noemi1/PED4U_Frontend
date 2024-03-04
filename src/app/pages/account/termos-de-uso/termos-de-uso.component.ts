import { Component, OnInit } from '@angular/core';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-termos-de-uso',
    templateUrl: './termos-de-uso.component.html',
    styleUrls: ['./termos-de-uso.component.css']
})
export class TermosDeUsoComponent {

  visible = true;
    faChevronCircleLeft = faChevronCircleLeft;
    title= 'Editar'
    constructor(

      private router: Router,
      private route: ActivatedRoute,
    ) { }
    voltar() {
      this.visible = false;
      this.router.navigate(['../'], { relativeTo: this.route })

    }
}
