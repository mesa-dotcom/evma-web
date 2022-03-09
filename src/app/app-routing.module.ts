import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import routes from './pages/route';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
