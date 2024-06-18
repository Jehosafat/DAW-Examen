import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

export const routes: Routes = [
        { path: '', component: InicioComponent },
        { path: 'nosotros', component: NosotrosComponent },
        { path: 'noticias', component: NoticiasComponent }
];
