import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from './servicios.service';
import { email } from './email';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component implements OnInit{
  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];
  dataSource = new MatTableDataSource<email>([]);

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.getFilteredComments().subscribe(
      (emails: email[]) => {
        this.dataSource.data = emails;
      },
      (error: any) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}
