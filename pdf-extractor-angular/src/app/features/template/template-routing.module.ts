import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { TemplateListComponent } from './template-list/template-list.component';

const routes: Routes = [

  {
    path:"",
    component:TemplateListComponent
  },
  {
    path:"create",
    component:CreateTemplateComponent
  },
  {
    path:"edit",
    component:EditTemplateComponent
  },
  {
    path:"details",
    component:TemplateDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TemplateRoutingModule { }
