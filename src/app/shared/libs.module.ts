import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: true,
};
@NgModule({
    imports: [
        CommonModule,
        ToastrModule.forRoot(),
        NgxMaskDirective, 
        NgxMaskPipe,
        
    ],
    exports: [
        ToastrModule,
        NgxMaskDirective, 
        NgxMaskPipe,
    ],
    providers: [
        provideNgxMask(maskConfig),
    ]
})
export class LibsModule { }
