import { ModuleWithProviders } from '@angular/core';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

class MyInMemoryDataService implements InMemoryDbService{
    createDb(){
        let categories=[
            {
                id:1,
                Name:'C#',
            },
            {
                id:2,
                Name:'Javascript'
            }
        ]

        

        return  {categories};
    }
}

export const MyInMemoryDataApi:ModuleWithProviders=InMemoryWebApiModule.forRoot(MyInMemoryDataService);