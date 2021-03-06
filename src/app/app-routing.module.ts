import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DevelopersComponent } from './developers/developers.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProductoComentariosComponent } from './producto-comentarios/producto-comentarios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'catalogo/:productoID', component: ProductoComentariosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'developers', component: DevelopersComponent},
  { path: 'pago', component: PaymentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'noAccess', component: NoAccessComponent},
  { path: 'reporte', component: ReporteComponent},
  { path: 'reportes', component: ReportesComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
