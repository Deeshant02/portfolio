import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }

  onContact(){
    this.router.navigate(['/contact']);
    // this.link.setActiveLink("/contact");
  }
}
