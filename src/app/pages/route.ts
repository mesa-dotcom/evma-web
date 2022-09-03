import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { EmploymentComponent } from "./employment/employment.component";
import { EvsComponent } from "./evs/evs.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'employment',
    component: EmploymentComponent
  },
  {
    path: 'evs',
    component: EvsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
]
export default routes;
