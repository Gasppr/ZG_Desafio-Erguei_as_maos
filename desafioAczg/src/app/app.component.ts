import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeradorComponent } from './pages/gerador/gerador.component';
import { GeradorModule } from './pages/gerador/gerador.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafioAczg';
}
