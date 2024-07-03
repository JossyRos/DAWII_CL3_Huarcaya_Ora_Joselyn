import { Component } from '@angular/core';
import { MaterialModule } from '../angular/material/material.module';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
