import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { RegistroComponent } from './workflow/registro/registro.component';

const routes: Routes = [
  {path:'',component:TableComponent},
  {path:'create', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
