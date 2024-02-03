import { 
  authLogin, 
  authLogout, 
  advertsLoaded, 
  tagsLoaded, 
  advertLoaded, 
  advertCreated,
  advertDeleted
} from '../actions'; 

import { 
  AUTH_LOGIN, 
  AUTH_LOGOUT, 
  ADVERTS_LOADED, 
  TAGS_LOADED, 
  ADVERT_LOADED, 
  ADVERT_CREATED,
  ADVERT_DELETED
} from '../types'; 


describe('Actions', () => {
  it('should create an action for AUTH_LOGIN', () => {
    const token = 'test-token';
    const expectedAction = { type: AUTH_LOGIN, payload: token };
    expect(authLogin(token)).toEqual(expectedAction);
  });

  it('should create an action for AUTH_LOGOUT', () => {
    const expectedAction = { type: AUTH_LOGOUT };
    expect(authLogout()).toEqual(expectedAction);
  });

  it('should create an action for ADVERTS_LOADED', () => {
    const adverts = [{ id: 1, title: 'Test Advert' }];
    const expectedAction = { type: ADVERTS_LOADED, payload: adverts };
    expect(advertsLoaded(adverts)).toEqual(expectedAction);
  });

  it('should create an action for TAGS_LOADED', () => {
    const tags = ['tag1', 'tag2'];
    const expectedAction = { type: TAGS_LOADED, payload: tags };
    expect(tagsLoaded(tags)).toEqual(expectedAction);
  });

  it('should create an action for ADVERT_LOADED', () => {
    const advert = { id: 1, title: 'Test Advert' };
    const expectedAction = { type: ADVERT_LOADED, payload: advert };
    expect(advertLoaded(advert)).toEqual(expectedAction);
  });

  it('should create an action for ADVERT_CREATED', () => {
    const advert = { id: 1, title: 'New Advert' };
    const expectedAction = { type: ADVERT_CREATED, payload: advert };
    expect(advertCreated(advert)).toEqual(expectedAction);
  });

  it('should create an action for ADVERT_DELETED', () => {
    const advertId = 1;
    const expectedAction = { type: ADVERT_DELETED, payload: advertId };
    expect(advertDeleted(advertId)).toEqual(expectedAction);
  });
});
