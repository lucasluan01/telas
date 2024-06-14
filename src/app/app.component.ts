import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaAbertutaComponent } from './tela-abertuta/tela-abertuta.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaAbertutaComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'telas';
}
