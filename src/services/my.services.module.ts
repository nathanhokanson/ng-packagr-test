import {DemoService} from './demo.service';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class MyServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyServicesModule,
      providers: [
        DemoService
      ]
    };
  }
}
