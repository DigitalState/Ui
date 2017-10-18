import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule, DateFormatPipe, LocalTimePipe, LocalePipe, TimeAgoPipe } from 'angular2-moment';
import { MomentTimezoneModule } from 'angular-moment-timezone';
import { ClipboardModule } from 'ngx-clipboard';

// import { AppTranslationModule } from '../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { DsBaseEntityApiService } from './services/base-entity-api.service';
import { DSAuthModule } from './modules/auth/auth.module';

import { MICROSERVICES } from './microservices';
import { CmsApiService } from './services/cms.service';
import { CmsTranslateLoader } from './services/cms-translation-loader.service';
import { IdentityApiService } from './services/identity.service';
import { FormioApiService } from './services/formio-api.service';
import { FormioModalFrameComponent } from './components/modals/formio-modal-frame.component';
import { DsRelativeTimeComponent } from './components/relative-time.component';
import { DsLanguageSwitcherDropdownComponent } from './components/language-switcher-dropdown.component';
import { KeyValuePipe } from './components/pipes/KeyValue.pipe';
import { IsEmpty, IsNotEmpty } from './components/pipes/lodash-helper.pipe';
import { DsEntityTranslatePipe } from './components/pipes/EntityTranslate.pipe';
import { DsEntityTranslationService } from './services/entity-translation.service';
import { DsStaticTranslationService } from './services/static-translation.service';
import { DsStaticTranslatePipe } from './components/pipes/static-translate.pipe';
import { DsClipboardCopyComponent } from './components/directives/ds-clipboard-copy.component';
import { DsFileUploadComponent } from './components/file-upload.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MdProgressSpinnerModule,
        TranslateModule,
        MomentModule,
        MomentTimezoneModule,
        ClipboardModule,
        DSAuthModule,
    ],
    declarations: [
        IsEmpty, IsNotEmpty, // lodash helpers
        KeyValuePipe,
        DsEntityTranslatePipe,
        DsStaticTranslatePipe,
        DsRelativeTimeComponent,
        DsLanguageSwitcherDropdownComponent,
        DsClipboardCopyComponent,
        DsFileUploadComponent,
        FormioModalFrameComponent,
    ],
    entryComponents: [
        FormioModalFrameComponent,
    ],
    providers: [
        DateFormatPipe,
        DsEntityTranslationService,
        DsStaticTranslationService,
        CmsApiService,
        CmsTranslateLoader,
        IdentityApiService,
        FormioApiService,
    ],
    exports: [
        MdProgressSpinnerModule,
        TranslateModule,
        ClipboardModule,
        IsEmpty, IsNotEmpty, // lodash helpers
        KeyValuePipe,
        DsEntityTranslatePipe,
        DsStaticTranslatePipe,
        DateFormatPipe,
        LocalePipe,
        LocalTimePipe,
        TimeAgoPipe,
        DsRelativeTimeComponent,
        DsLanguageSwitcherDropdownComponent,
        DsClipboardCopyComponent,
        DsFileUploadComponent,
    ]
})
export class DsSharedModule {

    constructor() {

    }

}
