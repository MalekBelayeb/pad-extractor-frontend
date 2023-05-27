import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:"",
    loadChildren:()=> import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"user",
    loadChildren:()=> import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path:"template",
    loadChildren:()=> import('./features/template/template.module').then(m => m.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
