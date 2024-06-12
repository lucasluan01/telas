import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaAbertutaComponent } from './tela-abertuta/tela-abertuta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaAbertutaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'telas';
}
