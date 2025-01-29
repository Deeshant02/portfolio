import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive, Router } from '@angular/router';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { ThemePalette } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links:any[] = [{label:"Home",link:"/",icon:"bi bi-house-door-fill"},{label:"About",link:"/about", icon:"bi bi-file-person"},{label:"Skills",link:"/skills",icon:"bi bi-code"},{label:"Works",link:"/works",icon:"bi bi-laptop"},{label:"Contact",link:"/contact",icon:"bi bi-telephone-fill"}];
  activeLink:any;
  ngOnInit(){
    this.activeLink = this.links[0].link;
  }
  activeLinkIndex = -1;
  background: ThemePalette = undefined;
  constructor(private router:Router){}

  setActiveLink(link:string){
    this.activeLink = link;
  }
  
  // onTabChanged(event: MatTabChangeEvent): void {
  //   switch (event.index) {
  //     case 0: // index of the tab
  //       // this is our stub tab for link
  //       this.router.navigate(['/']);
  //       break;
  //     case 1:
  //       // do stuff with content or do nothing :)
  //       this.router.navigate(['/about']);
  //       break;
  //     case 2:
  //       // do stuff with content or do nothing :)
  //       this.router.navigate(['/skills']);
  //       break;
  //     case 3:
  //       // do stuff with content or do nothing :)
  //       this.router.navigate(['/works']);
  //       break;
  //     case 4:
  //       // do stuff with content or do nothing :)
  //       this.router.navigate(['/contact']);
  //       break;
  //     default:
  //       this.router.navigate(['/']);
  //       break;
  //   }
  // }
}
