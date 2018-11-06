'use strict';

const feed = require('../input.json');
const Errors = require('../errors.js');

module.exports = class Aggregator {
  static getInfo(id) {
    const data = {
      likes: {
        quantity: 0,
        names: [],
      },
      comments: {
        quantity: 0,
        data: [],
      },
      post: null,
    };

    try {
      for (let item of feed) {
        if (item.post.id === id) {
          if (!data.post) {
            data.post = item.post.title;
          }

          if (item.type === 'Like') {
            data.likes.quantity += 1;
            data.likes.names.push(item.user.name);
          }

          if (item.type === 'Comment') {
            data.comments.quantity += 1;
            data.comments.data.push({
              name: item.user.name,
              comment: item.comment.commentText,
            });
          }
        }
      }
      return data;
    } catch (err) {
      throw {
        name: Errors.GET_INFO_ERR,
        message: 'Unexpected error',
        statusCode: 409,
      };
    }
  }
};
