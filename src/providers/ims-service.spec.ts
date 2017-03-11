import { ImsService } from './ims-service';
import { Credential } from '../model/credential';
 
describe('Ims Service', () => {
 
    it('header should be content-type json ', () => {
        let imsService = new ImsService(null);
        let headers = imsService.getHeaders(new Credential('','user', 'password'));
        expect(headers.get("Content-Type")).toBe('application/json');
    });
 
});