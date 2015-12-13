/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { dispatch, dispatchAsync } from '../dispatcher/AppDispatcher';
import * as SmsAPI from '../api/SmsAPI';
import SmsStore from '../stores/SmsStore';
import SmsActionTypes from '../constants/SmsActionTypes';

export function postMobile(mobile, fields) {
  dispatchAsync(SmsAPI.submitMobile(mobile), {
    request: SmsActionTypes.POST_SMS,
    success: SmsActionTypes.POST_SMS_SUCCESS,
    failure: SmsActionTypes.POST_SMS_ERROR
  }, { mobile });
}
