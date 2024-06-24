import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeUtilisateursComponent, ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontConnexion';
}
