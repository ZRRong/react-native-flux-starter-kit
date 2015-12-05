/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { dispatch, dispatchAsync } from '../../dispatcher/AppDispatcher';
import * as GithubAPI from '../../api/GithubAPI';
import UserStore from '../../stores/Github/UserStore';
import ActionTypes from '../../constants/ActionTypes';

export function requestUser(id, fields) {
  dispatchAsync(GithubAPI.getUser(id), {
    request: ActionTypes.REQUEST_GITHUB_USER,
    success: ActionTypes.REQUEST_GITHUB_USER_SUCCESS,
    failure: ActionTypes.REQUEST_GITHUB_USER_ERROR
  }, { id });
}
