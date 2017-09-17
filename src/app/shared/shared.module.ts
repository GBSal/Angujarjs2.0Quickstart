import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "./star.component";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacePipe } from "./convert-to-spaces.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:  [
    StarComponent,
    ConvertToSpacePipe
    
  ],
  exports:[
    StarComponent,
    ConvertToSpacePipe,
    CommonModule,
    FormsModule
    
  ]
})
export class SharedModule { }
