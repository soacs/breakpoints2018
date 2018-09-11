import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule, LayoutDirective} from '@angular/flex-layout';
import {CustomBreakPointsProvider} from './breakpoints/custom.breakpoints';
import {CustomShowHideDirective} from './directives/custom-show-hide.directive';
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomShowHideDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [
    CustomBreakPointsProvider,     // Adds breakpoints for 'print' mediaQueries
    LayoutDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

