/**
 * React Native Flux Starter Kit
 * (C) 2015 Mingdong Luo (https://github.com/mdluo) | MIT License
 */

import { fetchJSON } from '../utils/APIUtils';
//url:'/confirmation'   user:{mobile}
export function submitMobile(mobile, url = `/confirm`) {
  return fetchJSON(url, 'POST', mobile);
}
