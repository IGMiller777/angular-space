import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiLinkModule, TuiRootModule} from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiAccordionModule, TuiCheckboxLabeledModule, TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
