import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {IndexquranComponent} from './quran/indexquran/indexquran.component';
import {SuraonesuraComponent} from './sura/suraonesura/suraonesura.component';
import {AyaonesuraComponent} from './aya/ayaonesura/ayaonesura.component';
import {LafdonesuraComponent} from './lafd/lafdonesura/lafdonesura.component';

import {IndexlafdComponent} from './lafd/indexlafd/indexlafd.component';
import {LafdharfComponent} from './lafd/lafdharf/lafdharf.component';
import { LafdeqallayaComponent } from './lafd/lafdeqallaya/lafdeqallaya.component';
import { LafdplusallayaComponent } from './lafd/lafdplusallaya/lafdplusallaya.component';
//import { CbuttonComponent } from './quran/cbutton/cbutton.component';


const routes: Routes = [

 /*
  { path: 'indexlafd', component:IndexlafdComponent},

  { path: 'lafdharf/:idh', component: LafdharfComponent,outlet:'mainview'}, 

  { path: 'indexlafd/lafdharf/:idh/lafdeqallaya/:nl', component:LafdeqallayaComponent,outlet:'mainviewb'},
  { path: 'indexlafd/lafdharf/:idh/lafdplusallaya/:nl', component:LafdplusallayaComponent,outlet:'mainviewb'} 
  */
 // { path: '**',redirectTo:'/', pathMatch: 'full'},
 // { path: '',  redirectTo:'/', pathMatch: 'full'},
 
 { path: '**',   redirectTo: 'quran', pathMatch: 'full'},

  { path: '',   redirectTo: 'quran', pathMatch: 'full'},

  { path: 'quran', component:IndexquranComponent,outlet:'indexview'}, 
  
  { path: 'suraonesura/:os', component: SuraonesuraComponent,outlet:'mainview'},
  { path:  'ayaonesura/:os', component: AyaonesuraComponent,outlet:'mainview'},
  { path: 'lafdonesura/:os', component: LafdonesuraComponent,outlet:'mainview'},
  { path: 'lafdonesura/:os/lafdeqallaya/:nl', component: LafdeqallayaComponent,outlet:'mainview'},
  { path: 'lafdonesura/:os/lafdplusallaya/:nl', component: LafdplusallayaComponent,outlet:'mainview'},

 /* { path: '',   redirectTo: 'quran', pathMatch: 'full'},
  { path: 'quran', component:IndexquranComponent, outlet:'indexview'},

      { path: '',
      children:[
              { path: 'suraonesura/:os', component: SuraonesuraComponent,outlet:'mainview'}]},

      { path: '',
      children:[
              { path:  'ayaonesura/:os', component: AyaonesuraComponent,outlet:'mainview'}]},
       
      { path: '',
      children:[
              { path: 'lafdonesura/:os', component: LafdonesuraComponent,outlet:'mainview'}]},
    */
      
 
  { path: 'indexlafd', component:IndexlafdComponent,outlet: 'indexview'},

  { path: 'lafdharf/:idh', component: LafdharfComponent,outlet:'mainview'}, 

  { path: 'lafdharf/:idh/lafdeqallaya/:nl', component:LafdeqallayaComponent,outlet:'mainview'},
  { path: 'lafdharf/:idh/lafdplusallaya/:nl', component:LafdplusallayaComponent,outlet:'mainview'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
