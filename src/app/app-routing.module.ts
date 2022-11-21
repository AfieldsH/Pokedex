import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./componentes/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./componentes/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'gen1',
    loadChildren: () => import('./componentes/gen1/gen1.module').then( m => m.Gen1PageModule)
  },
  {
    path: 'gen2',
    loadChildren: () => import('./componentes/gen2/gen2.module').then( m => m.Gen2PageModule)
  },
  {
    path: 'gen3',
    loadChildren: () => import('./componentes/gen3/gen3.module').then( m => m.Gen3PageModule)
  },
  {
    path: 'todospokes',
    loadChildren: () => import('./componentes/todospokes/todospokes.module').then( m => m.TodospokesPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./componentes/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
