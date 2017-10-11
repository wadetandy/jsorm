import { expect, fetchMock } from '../test-helper';
import { Credential } from '../fixtures';

let fetchMock = require('fetch-mock');

function check( done, f ) {
  try {
    f();
    done();
  } catch( e ) {
    done( e );
  }
}

after(function () {
  fetchMock.restore();
});

let instance;
let payloads;
let putPayloads;
let deletePayloads;
let serverResponse;
beforeEach(function() {
  payloads = [];
  instance = new Credential();
});

const resetMocks = function() {
  fetchMock.restore();

  fetchMock.post('http://example.com/api/v1/credentials', function(url, payload) {
    payloads.push(JSON.parse(payload.body));
    return serverResponse;
  });
}

describe('Credential persistence', function() {
  beforeEach(function () {
    resetMocks();
  });

  describe('#save()', function() {
    it('Makes sure the model only has the returned values', function(done) {
      serverResponse = {
        data: {
          id: '1',
          type: 'credentials',
          attributes: {
            login: 'flast',
            jwt: 'badf00d'
          }
        }
      }

      instance.login = 'joe@bgov.com';
      instance.password = 'pa$$word!'

      instance.save().then(() => {
        check( done, function() {
          expect(instance.password).to.eq(null);
        })
      });
    });
  });
});
