import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Restangular } from 'ngx-restangular';

import { MicroserviceConfig, microserviceRestangularFactory } from '../providers/microservice.provider';
import { AppState } from '../../app.service';
import { AuthService } from '../modules/auth/auth.service';
import { DsBaseEntityApiService } from './base-entity-api.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CmsApiService extends DsBaseEntityApiService<any> {

    /**
     * Anonymous token to access the CMS API
     */
    token: string;

    cmsUrlPrefix: string;
    contentPath: string;

    constructor(protected http: Http,
                protected appState: AppState,
                protected auth: AuthService) {
        super();

        const config = appState.get('microservices').cms;
        this.cmsUrlPrefix = config.entrypoint.url;
        this.contentPath = this.cmsUrlPrefix + config.paths.content;
    }

    getTranslations(): Observable<any> {
        return this.getRequestHeaders().flatMap((headers: Headers) => {
            let url = this.contentPath;
            let options = new RequestOptions({
                headers: headers,
                params: {
                    datas: [ 'translation' ],
                }
            });

            return this.http.get(url, options)
                .map((response: Response) => {
                    return response.json().datas['translation'];
                })
                .catch((response: Response) => Observable.throw(response.json()));
        });
    }

    protected getRequestHeaders(): Observable<Headers> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });

        // @Todo Improve token validation
        if (this.token) {
            headers.set('Authorization', `Bearer ${this.token}`);
            return Observable.of(headers);
        }
        else {
            return this.auth.getAnonymousToken().flatMap(token => {
                headers.set('Authorization', `Bearer ${token}`);
                return Observable.of(headers);
            });
        }
    }
}

