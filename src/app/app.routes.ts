import { Routes } from '@angular/router';
import { TelaAbertutaComponent } from './tela-abertuta/tela-abertuta.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TelaLojistaComponent } from './tela-lojista/tela-lojista.component';
import { PoliticaComponent } from './politica/politica.component';
import { TermosComponent } from './termos/termos.component';

export const routes: Routes = [
    { path: '',title:"Pllis - Página Inicial", component: TelaAbertutaComponent },
    { path: 'tela-cliente',title:"Pllis - Página do Cliente", component: LandingPageComponent},
    { path: 'tela-lojista',title:"Pllis - Página do Lojista", component: TelaLojistaComponent},
    { path: 'politica-privacidade',title:"Pllis - Politica Privacidade", component: PoliticaComponent},
    { path: 'termos-servico',title:"Pllis - Termos de Serviço", component: TermosComponent},
];
