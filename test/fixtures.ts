import { Model, Config, attr, hasMany, belongsTo, hasOne } from '../src/index';

class ApplicationRecord extends Model {
  static baseUrl = 'http://example.com';
  static apiNamespace = '/api';
}

// typescript class
class Person extends ApplicationRecord {
  static endpoint = '/v1/people';
  static jsonapiType = 'people';

  firstName: string = attr();
  lastName: string = attr();
}

class PersonWithExtraAttr extends Person {
  extraThing: string = attr({ persist: false });
}

class Credential extends ApplicationRecord {
  static endpoint = '/v1/credentials';
  static jsonapiType = 'credentials';

  login: string = attr();
  password: string = attr();
  jwt: string = attr();
}

// Ensure setup() can be run multiple times with no problems
// putting this here, otherwise relations wont be available.
Config.setup();

// plain js class
let Author = Person.extend({
  static: {
    endpoint: '/v1/authors',
    jsonapiType: 'authors'
  },

  nilly:      attr(),

  multiWords: hasMany('multi_words'),
  books:      hasMany(),
  tags:       hasMany(),
  genre:      belongsTo('genres'),
  bio:        hasOne('bios')
});

class Book extends ApplicationRecord {
  static jsonapiType = 'books';

  title: string = attr();

  genre = belongsTo('genres');
  author = hasOne('authors')
}

class Genre extends ApplicationRecord {
  static jsonapiType = 'genres';

  authors: any = hasMany('authors')

  name: string = attr();
}

class Bio extends ApplicationRecord {
  static jsonapiType = 'bios';

  description: string = attr()
}

class Tag extends ApplicationRecord {
  static jsonapiType = 'tags';

  name: string = attr()
}

class MultiWord extends ApplicationRecord {
  static jsonapiType = 'multi_words';
}

const TestJWTSubclass = ApplicationRecord.extend({
});

const NonJWTOwner = Model.extend({
});

Config.setup({
  jwtOwners: [
    ApplicationRecord,
    TestJWTSubclass
  ]
});

export {
  ApplicationRecord,
  TestJWTSubclass,
  NonJWTOwner,
  Author,
  Person,
  PersonWithExtraAttr,
  Book,
  Genre,
  Bio,
  Credential,
  Tag
};
