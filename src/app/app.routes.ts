import { Routes } from '@angular/router'; 
import { Dashboard } from './sidebar/dashboard/dashboard'; 
import { Usersprofile } from './sidebar/usersprofile/usersprofile'; 
 import { Postuser } from './sidebar/postuser/postuser'; 
import { Overview } from './sidebar/overview/overview';
import { Whatlearn } from './sidebar/whatlearn/whatlearn';
import { Logout } from './sidebar/logout/logout';

 export const routes: Routes = [   

 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },    
 {path: 'dashboard', component: Dashboard},
 {path: 'profile', component: Usersprofile},
 {path: 'postuser/:id', component: Postuser},
 {path: 'overview', component: Overview},
 {path: 'whatlearn', component: Whatlearn},
 {path: 'logout', component: Logout},
 
 ];
