import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // CommonModule includes DatePipe

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // This imports DatePipe and other common directives
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
userImageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwimyyt5NyS2lVxm_iHWtNo4e4dXbVQw_ohg&s';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}