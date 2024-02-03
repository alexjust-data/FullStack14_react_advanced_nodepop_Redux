import {
    getIsAuthenticated,
    getSessionToken,
    getAdvertsList,
    getAdvertsLoading,
    getAdvertDetail,
    getTags
} from '../selectors';

describe('Selectors', () => {
    const mockState = {
      session: {
        token: 'test-token'
      },
      adverts: {
        list: [{ id: 1, title: 'Advert 1' }],
        isLoading: false,
        detail: { id: 2, title: 'Advert 2' }
      },
      tags: ['tag1', 'tag2']
    };

    it('should return the authentication state', () => {
      expect(getIsAuthenticated(mockState)).toEqual(true);
    });

    it('should return the session token', () => {
      expect(getSessionToken(mockState)).toEqual('test-token');
    });

    it('should return the adverts list', () => {
      expect(getAdvertsList(mockState)).toEqual([{ id: 1, title: 'Advert 1' }]);
    });

    it('should return the adverts loading state', () => {
      expect(getAdvertsLoading(mockState)).toEqual(false);
    });

    it('should return the detail of a specific advert', () => {
      expect(getAdvertDetail(mockState)).toEqual({ id: 2, title: 'Advert 2' });
    });

    it('should return the tags', () => {
      expect(getTags(mockState)).toEqual(['tag1', 'tag2']);
    });
});

  