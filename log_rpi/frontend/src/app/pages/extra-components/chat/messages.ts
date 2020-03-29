/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
  * Dual-licensed under the Single Application / Multi Application License
 * (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3
 * (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder
 * for license information on type of license applicable.
 */

export const messages = [
  {
    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: false,
    date: new Date(),
    user: {
      name: 'John Doe',
      avatar: 'https://i.gifer.com/no.gif',
    },
  },
  {
    text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    reply: true,
    date: new Date(),
    user: {
      name: 'John Doe',
      avatar: 'https://i.gifer.com/no.gif',
    },
  },
  {
    text: 'Hello, how are you?',
    reply: false,
    date: new Date(),
    user: {
      name: 'John Doe',
      avatar: '',
    },
  },
  {
    text: 'Hey looks at that pic I just found!',
    reply: false,
    date: new Date(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        type: 'image/jpeg',
        icon: false,
      },
    ],
    user: {
      name: 'John Doe',
      avatar: '',
    },
  },
  {
    text: 'What do you mean by that?',
    reply: false,
    date: new Date(),
    type: 'quote',
    quote: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    user: {
      name: 'John Doe',
      avatar: '',
    },
  },
  {
    text: 'Attached is an archive I mentioned',
    reply: true,
    date: new Date(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        icon: 'file-text-outline',
      },
    ],
    user: {
      name: 'John Doe',
      avatar: '',
    },
  },
  {
    text: 'Meet me there',
    reply: false,
    date: new Date(),
    type: 'map',
    latitude: 40.714728,
    longitude: -73.998672,
    user: {
      name: 'John Doe',
      avatar: '',
    },
  },
];
