import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdProgressBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { AppTranslationModule } from '../app.translation.module';
import { AppState } from '../app.service';
import { NgaModule } from '../../theme/nga.module';

import { DsBaseEntityApiService } from './services/base-entity-api.service';
import { DSAuthModule } from './modules/auth/auth.module';

import { MICROSERVICES } from './microservices';
import { IdentityApiService } from './services/identity.service';
import { DsBackLink } from './components/back-link.component';
import { DefaultModal } from './components/modals/default-modal/default-modal.component';
import { KeyValuePipe } from './components/pipes/KeyValue.pipe';
import { DsEntityTranslatePipe } from './components/pipes/EntityTranslate.pipe';
import { DsEntityTranslationService } from './services/entity-translation.service';
import { DsStaticTranslationService } from './services/static-translation.service';
import { DsStaticTranslatePipe } from './components/pipes/static-translate.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TranslateModule,
        DSAuthModule,
    ],
    declarations: [
        KeyValuePipe,
        DsEntityTranslatePipe,
        DsStaticTranslatePipe,
    ],
    entryComponents: [

    ],
    providers: [
        DsEntityTranslationService,
        DsStaticTranslationService,
        IdentityApiService
    ],
    exports: [
        KeyValuePipe,
        DsEntityTranslatePipe,
        DsStaticTranslatePipe,
        TranslateModule,
    ]
})
export class DsSharedModule {

    constructor(private appState: AppState) {

    }

}
