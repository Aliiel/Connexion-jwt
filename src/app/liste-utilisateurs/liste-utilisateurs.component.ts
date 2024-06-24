import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../utilisateurs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.css'
})
export class ListeUtilisateursComponent implements OnInit {

  utilisateurs: any[] = [];

  constructor(private UtilisateursService: UtilisateursService) { }

  ngOnInit(): void {
    this.UtilisateursService.getUsers().subscribe(
      (data: any[]) => {
      this.utilisateurs = data;
      console.log(this.utilisateurs);
    });
  }

}
