import { Component } from '@angular/core';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-gerador',
  imports: [MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './gerador.component.html',
  styleUrl: './gerador.component.css'
})
export class GeradorComponent {

}
