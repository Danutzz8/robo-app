import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

   import * as reducer from './reducers';

   describe('searchRobots', () => {
       it('should return the initial state', () => {
           expect(reducers.searchRobots(undefined, {})).equal({searchField: ''})
       })
   })