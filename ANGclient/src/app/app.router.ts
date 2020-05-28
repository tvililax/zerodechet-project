/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
    //

    import { HomepageComponent } from "./routes/homepage/homepage.component";

    import { ZerodechetComponent } from "./routes/zerodechet/zerodechet.component";

    import { AlimentaireComponent } from "./routes/alimentaire/alimentaire.component";

    import { LoginComponent } from "./routes/login/login.component";

    import { UserComponent } from "./routes/user/user.component";



/* 
Export
*/
    export const AppRouterModule: Routes = [
        {
            path: '',
            component: HomepageComponent
        },
        {
            path: 'zerodechet',
            component: ZerodechetComponent
        },
        {
            path: 'alimentaire',
            component: AlimentaireComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'user',
            component: UserComponent
        }
    ];
//