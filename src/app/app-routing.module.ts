import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HexagonDataComponent} from './components/hexagon-data/hexagon-data.component';

const routes: Routes = [
  {path: '', component: HexagonDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
