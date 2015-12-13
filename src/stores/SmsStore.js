/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import Immutable from 'immutable';

import { register, waitFor } from '../dispatcher/AppDispatcher';
import { createStore } from '../utils/StoreUtils';

let _user = Immutable.Map();

const SmsStore = createStore({
  getSms() {
    return _user.toJS();
  }
});

SmsStore.dispatchToken = register(action => {
  switch(action.type) {
    case 'REQUEST_SMS_SUCCESS':
      if (action.response) {
        _user = Immutable.Map(action.response);
        SmsStore.emitChange();
      }
      break;
  }
});

export default SmsStore;
