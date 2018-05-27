var expect = require("chai").expect;
var mongoose = require("mongoose");
var User = require("../database-mongo/index.js");
//to run the test type:   ./node_modules/mocha/bin/mocha ./test/db.test.js




describe("User Model", function () {

  it("should be a Mongoose model", function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it("should have a schema", function () {
    expect(User.schema).to.exist;
  });

  it("should have a `email` property", function () {
    expect(User.schema.paths.email).to.exist;
  });

  it("should have a `email` property that is a string", function () {
    expect(User.schema.paths.email.options.type.name).to.equal("String");
  });

  it("should have a `email` property that is unique", function () {
    expect(User.schema.paths.email.options.unique).to.be.true;
  });

  it("should have a `password` property", function () {
    expect(User.schema.paths.password).to.exist;
  });

  it("should have a `password` property that is a string", function () {
    expect(User.schema.paths.password.options.type.name).to.equal("String");
  });

  it("should have a `name` property", function () {
    expect(User.schema.paths.name).to.exist;
  });

  it("should have a `name` property that is a string", function () {
    expect(User.schema.paths.name.options.type.name).to.equal("String");
  });

  it("should have a `username` property", function () {
    expect(User.schema.paths.username).to.exist;
  });

  it("should have a `username` property that is a string", function () {
    expect(User.schema.paths.username.options.type.name).to.equal("String");
  });
  
});