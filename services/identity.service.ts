import { Inject, Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';

import { MicroserviceConfig, microserviceRestangularFactory } from '../providers/microservice.provider';
import { AppState } from '../../app.service';
import { AuthService } from '../modules/auth/auth.service';
import { DsBaseEntityApiService } from './base-entity-api.service';

import 'rxjs/Rx';

@Injectable()
export class IdentityApiService extends DsBaseEntityApiService<any> {

    constructor(public restangular: Restangular,
                protected appState: AppState,
                protected auth: AuthService) {
        super();

        let msConfig = new MicroserviceConfig();
        msConfig.name = 'identities';
        msConfig.settings = this.appState.get('microservices')[msConfig.name];

        this.restangular = microserviceRestangularFactory(restangular, auth, msConfig);
    }

    oneByType(identityType: string, id: string): any {
        let urlPrefix = IdentityUtils.getIdentityUrlPrefix(identityType);
        return this.one(urlPrefix, id);
    }

    getIdentityResource(identityType: string): any {
        let urlPrefix = IdentityUtils.getIdentityUrlPrefix(identityType);
        return this.resource(urlPrefix);
    }

    getPersonaResource(identityType: string): any {
        let urlPrefix = IdentityUtils.getPersonaUrlPrefix(identityType);
        return this.resource(urlPrefix);
    }

    getPersonas(identityType: string, identityUuid: string): any {
        let singular = IdentityUtils.getSingular(identityType);
        let resource = this.getPersonaResource(identityType);
        let params = {};
        params[singular + '.uuid'] = identityUuid;
        return resource.getList(params);
    }
}

export class IdentityUtils {

    static getIdentityUrlPrefix(identityType: string): string {
        switch (identityType) {
            case 'Anonymous': return 'anonymouses';
            case 'BusinessUnit': return 'business-units';
            case 'Individual': return 'individuals';
            case 'Staff': return 'staffs';
            default: return null
        }
    }

    static getPersonaUrlPrefix(identityType: string): string {
        switch (identityType) {
            case 'Anonymous': return 'anonymouse-personas';
            case 'Individual': return 'individual-personas';
            case 'Staff': return 'staff-personas';
            default: return null
        }
    }

    static getSingular(identityType: string): string {
        switch (identityType) {
            case 'Anonymous': return 'anonymouse';
            case 'Individual': return 'individual';
            case 'Staff': return 'staff';
            default: return null
        }
    }
}
