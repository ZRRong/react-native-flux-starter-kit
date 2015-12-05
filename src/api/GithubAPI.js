/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { fetchJSON } from '../utils/APIUtils';

export function getUser(id, url = `users/${id}`) {
  return fetchJSON(url);
}
