import { NgModule } from '@angular/core';
import { RouterModule,Routes,Route } from '@angular/router';

import { NotFoundComponent } from './404/404.component';

let routes:Routes=[

    {path:'**',component:NotFoundComponent}
];


let routerProvider=RouterModule.forRoot(routes);

@NgModule({
    imports:[routerProvider],
    declarations:[],
    exports:[RouterModule]
})
export class RootRouter{}