/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import Immutable from 'immutable';

import { register, waitFor } from '../../dispatcher/AppDispatcher';
import { createStore } from '../../utils/StoreUtils';

let _user = Immutable.Map();

const UserStore = createStore({
  getUser() {
    return _user.toJS();
  }
});

DoctorStore.dispatchToken = register(action => {
  switch(action.type) {
    case 'REQUEST_GITHUB_USER_SUCCESS':
      if (action.response) {
        _user = Immutable.Map(action.response);
        UserStore.emitChange();
      }
      break;
  }
});

export default UserStore;
