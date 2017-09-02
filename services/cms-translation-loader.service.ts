import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CmsApiService } from './cms.service';

import { Observable } from 'rxjs/Observable';

import isObject from 'lodash/isObject';
import merge from 'lodash/merge';


@Injectable()
export class CmsTranslateLoader extends TranslateHttpLoader {

    constructor(http: Http, protected cmsService: CmsApiService, prefix?: string, suffix?: string) {
        super(http, prefix, suffix);
    }

    getTranslation(lang: string): Observable<any> {
        return super.getTranslation(lang).flatMap((localTranslations: any) => {
            return this.cmsService.getTranslations().flatMap((cmsTranslations: any) => {
                if (isObject(cmsTranslations)) {
                    let mergedTranslations = merge(localTranslations, cmsTranslations[lang]);
                    return Observable.of(mergedTranslations);
                }
            }).catch((response: Response) => {
                console.warn(`Error while fetching CMS translations due to ${response.statusText}. Falling back to local translations.`);
                return Observable.of(localTranslations);
            });
        });
    }
}