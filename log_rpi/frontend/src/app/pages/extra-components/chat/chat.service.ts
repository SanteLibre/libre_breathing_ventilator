/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Dual-licensed under the Single Application / Multi Application License (when this software was purchased) and GNU AFFERO GENERAL PUBLIC LICENSE Version 3 (when it was not).
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP / LICENSE_AGPL in the 'docs' folder for license information on type of license applicable.
 */

import { Injectable } from '@angular/core';

import { messages } from './messages';
import { botReplies, gifsLinks, imageLinks } from './bot-replies';

@Injectable()
export class ChatService {


  loadMessages() {
    return messages;
  }

  loadBotReplies() {
    return botReplies;
  }

  reply(message: string) {
    const botReply: any =  this.loadBotReplies()
      .find((reply: any) => message.search(reply.regExp) !== -1);

    if (botReply.reply.type === 'quote') {
      botReply.reply.quote = message;
    }

    if (botReply.type === 'gif') {
      botReply.reply.files[0].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
    }

    if (botReply.type === 'pic') {
      botReply.reply.files[0].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    }

    if (botReply.type === 'group') {
      botReply.reply.files[1].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
      botReply.reply.files[2].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    }

    botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
    return { ...botReply.reply };
  }
}
