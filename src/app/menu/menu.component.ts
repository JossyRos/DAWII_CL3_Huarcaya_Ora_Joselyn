import { Component } from '@angular/core';
import { MaterialModule } from '../angular/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule,RouterOutlet,

  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
constructor(private router: Router, private route: ActivatedRoute) { }

  irPregunta1(): void {
    this.router.navigate(['pregunta1'], { relativeTo: this.route });
  }

  irPregunta2(): void {
    this.router.navigate(['pregunta2'], { relativeTo: this.route });
  }
}
