import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';

import { TemplateService } from './service/template.service';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { TemplateListComponent } from './template-list/template-list.component';


@NgModule({
  declarations: [
  
    CreateTemplateComponent,
    EditTemplateComponent,
    TemplateDetailsComponent,
    TemplateListComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],providers:[TemplateService]
})
export class TemplateModule { }
