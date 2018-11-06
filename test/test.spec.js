'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const { expect } = chai;

chai.use(chaiHttp);

describe('Get info route', () => {
  describe('GET /notifications', async () => {
    const validId = 'b1638f970c3ddd528671df76c4dcf13e';

    const request = id => chai.request(server).get(`/notifications/${id}`);

    it('should return aggregated data for a post', async () => {
      try {
        const res = await request(validId);
        expect(res.body).to.have.all.keys(['likes', 'comments', 'post']);
        expect(res.body.post).to.eq(
          'Acme Inc dynamically scales niches worldwide',
        );
      } catch (e) {
        expect(e).to.be.null;
      }
    });

    it('should return empty post with no data if id doesnt match', async () => {
      try {
        const res = await request(10);
        expect(res.body.likes.quantity).to.eq(0);
        expect(res.body.comments.quantity).to.eq(0);
        expect(res.body.post).to.eq(null);
      } catch (e) {
        expect(e).to.be.null;
      }
    });
  });
});
