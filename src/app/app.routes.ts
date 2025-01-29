import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { SkillsComponent } from './body/skills/skills.component';
import { WorksComponent } from './body/works/works.component';
import { ContactComponent } from './body/contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "skills",
        component: SkillsComponent
    },
    {
        path: "works",
        component: WorksComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
