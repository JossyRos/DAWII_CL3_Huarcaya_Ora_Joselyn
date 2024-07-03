import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './servicios.service';
import { MaterialModule } from '../../angular/material/material.module';
import { personaje } from './personaje';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'gender', 'origin', 'location', 'image'];
  personaje: personaje[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.getHumanCharacters().subscribe((data: personaje[]) => {
      console.log(data);
      this.personaje = data;
    });
  }

}
