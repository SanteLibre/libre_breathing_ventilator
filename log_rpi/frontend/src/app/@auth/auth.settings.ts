/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { NbPasswordAuthStrategy } from '@nebular/auth';
import { environment } from '../../environments/environment';

export const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const authOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: environment.apiUrl,
      token: {
        key: 'token',
      },
      login: {
        endpoint: '/auth/login',
        method: 'post',
      },
      register: {
        endpoint: '/auth/sign-up',
        method: 'post',
      },
      logout: {
        endpoint: '/auth/sign-out',
        method: 'post',
      },
      requestPass: {
        endpoint: '/auth/request-pass',
        method: 'post',
      },
      resetPass: {
        endpoint: '/auth/reset-pass',
        method: 'post',
      },
    }),
  ],
  forms: {
    login: {
      socialLinks: socialLinks,
    },
    register: {
      socialLinks: socialLinks,
    },
  },
};
