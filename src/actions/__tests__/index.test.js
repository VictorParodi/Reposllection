import {FETCH_REPOS } from './../types';
import { fetchRepos } from './../index';

describe('Fetch Repos Action', () => {
    it('has the correct type', () => {
        const action = fetchRepos();
        expect(action.type).toEqual(FETCH_REPOS);
    });
});