import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'angular-observable';
}
