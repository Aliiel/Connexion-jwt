import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  username: string = '';
  password: string = '';

  onSubmit() {
    // Logique de connexion ici
    console.log('Nom d\'utilisateur:', this.username);
    console.log('Mot de passe:', this.password);
    // Vous pouvez ajouter votre logique d'authentification ici
  }

}
