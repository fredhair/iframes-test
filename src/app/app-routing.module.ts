import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarLink } from './models/app-common';
import { FirstExamplePageComponent } from './pages/first-example-page/first-example-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondExamplePageComponent } from './pages/second-example-page/second-example-page.component';
import { ThirdExamplePageComponent } from './pages/third-example-page/third-example-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'first-example-page',
    component: FirstExamplePageComponent
  },
  {
    path: 'second-example-page',
    component: SecondExamplePageComponent
  },
  {
    path: 'third-example-page',
    component: ThirdExamplePageComponent
  },
];

//Some of this could be replace with regex
const kebabToSpacedTitleCase = (stringToConvert: string) => stringToConvert.split('-').map(substring => substring.charAt(0).toUpperCase() + substring.slice(1) + ' ').reduce((totalString: string, currentSubstring: string) => totalString += currentSubstring).trimEnd();

export const navLinks = routes.map<NavbarLink>(route => ({
  href: route.path ?? '',
  name: kebabToSpacedTitleCase(route.path || 'Home')
})) as NavbarLink[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
