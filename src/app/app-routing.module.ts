import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  { path: "gallary", component: GallaryComponent },
  { path: "image/:id", component: ImageComponent },
  { path: "", redirectTo: "/gallary", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
