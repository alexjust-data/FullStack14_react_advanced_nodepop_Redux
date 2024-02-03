import { 
  AUTH_LOGIN, 
  AUTH_LOGOUT, 
  ADVERTS_LOADED, 
  TAGS_LOADED, 
  ADVERT_LOADED, 
  ADVERT_CREATED,
  ADVERT_DELETED
} from '../types'; 

import rootReducer from '../reducers';

describe('root reducer', () => {

  // Test for auth reducer
  describe('auth reducer', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined, {}).auth).toEqual(false);
    });

    it('should handle AUTH_LOGIN', () => {
      expect(rootReducer({ auth: false }, { type: AUTH_LOGIN }).auth).toEqual(true);
    });

    it('should handle AUTH_LOGOUT', () => {
      expect(rootReducer({ auth: true }, { type: AUTH_LOGOUT }).auth).toEqual(false);
    });
  });

  // Test for session reducer
  describe('session reducer', () => {
    const initialState = { session: { token: null } }; 

    it('should return the initial state', () => {
        expect(rootReducer(undefined, {}).session).toEqual(initialState.session);
    });


    it('should handle AUTH_LOGIN', () => {
      const token = 'test-token';
      expect(rootReducer(initialState, { type: AUTH_LOGIN, payload: token }).session).toEqual({ token });
    });

    it('should handle AUTH_LOGOUT', () => {
      expect(rootReducer({ session: { token: 'test-token' } }, { type: AUTH_LOGOUT }).session).toEqual({ token: null });
    });
  });

  // Test for tags reducer
  describe('tags reducer', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined, {}).tags).toEqual([]);
    });

    it('should handle TAGS_LOADED', () => {
      const testTags = ['tag1', 'tag2'];
      expect(rootReducer({ tags: [] }, { type: TAGS_LOADED, payload: testTags }).tags).toEqual(testTags);
    });
  });

  // Test for adverts reducer
  describe('adverts reducer', () => {
    // Define the initialState as it is in your adverts reducer
    const initialState = {
      list: [],
      detail: null,
    };
  
    it('should return the initial state', () => {
      expect(rootReducer(undefined, {}).adverts).toEqual(initialState);
    });
  
    it('should handle ADVERTS_LOADED', () => {
      const advertsData = [{ id: 1, title: 'Advert 1' }];
      expect(rootReducer({ adverts: initialState }, {
        type: ADVERTS_LOADED, 
        payload: advertsData 
      }).adverts).toEqual({
        ...initialState,
        list: advertsData
      });
    });

    // ... other tests for adverts reducer
  });

});
