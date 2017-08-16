
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