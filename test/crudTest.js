/* Tests pour vérifier que toute les étapes du CRUD fonctionnent bien */

const User = require("../models/user");
const assert = require("assert");
const sinon = require("sinon");

describe("test CRUD User Model", () => {
  let createStub, findByIdStub, findByIdAndUpdateStub, findByIdAndDeleteStub;

  beforeEach(() => {
    // Stub the User.findById method before each test
    createStub = sinon.stub(User, "create");
    findByIdStub = sinon.stub(User, "findById");
    findByIdAndUpdateStub = sinon.stub(User, "findByIdAndUpdate");
    findByIdAndDeleteStub = sinon.stub(User, "findByIdAndDelete");
  });

  afterEach(() => {
    // Restore the original method after each test
    createStub.restore();
    findByIdStub.restore();
    findByIdAndUpdateStub.restore();
    findByIdAndDeleteStub.restore();
  });

  it("should find a user by ID", async () => {
    const expectedUser = {
      _id: "5e9f8f8f8f8f8f8f8f8f8f8",
      name: "John Doe",
      email: "john@example.com",
      password: "hashedpassword",
    };

    findByIdStub.withArgs("5e9f8f8f8f8f8f8f8f8f8f8").resolves(expectedUser);

    const foundUser = await User.findById("5e9f8f8f8f8f8f8f8f8f8f8");

    assert.strictEqual(foundUser.name, "John Doe");
    assert.strictEqual(foundUser.email, "john@example.com");
  });

  it("should find a user by ID", async () => {
    const expectedUser = {
      _id: "5e9f8f8f8f8f8f8f8f8f8f8",
      name: "Doe",
      firstname: "Jhon",
      email: "john@example.com",
      password: "hashedpassword",
    };

    findByIdStub.withArgs("5e9f8f8f8f8f8f8f8f8f8f8").resolves(expectedUser);

    const foundUser = await User.findById("5e9f8f8f8f8f8f8f8f8f8f8");

    assert.strictEqual(foundUser.name, "Doe");
    assert.strictEqual(foundUser.email, "john@example.com");
  });

  it("should update a user by ID", async () => {
    const userData = {
      name: "Jane Doe Updated",
      email: "jane.updated@example.com",
    };

    const expectedUser = { ...userData, _id: "5e9f8f8f8f8f8f8f8f8f8f9" };
    findByIdAndUpdateStub
      .withArgs("5e9f8f8f8f8f8f8f8f8f8f9", userData, { new: true })
      .resolves(expectedUser);

    const updatedUser = await User.findByIdAndUpdate(
      "5e9f8f8f8f8f8f8f8f8f8f9",
      userData,
      { new: true }
    );

    assert.strictEqual(updatedUser.name, "Jane Doe Updated");
    assert.strictEqual(updatedUser.email, "jane.updated@example.com");
  });

  it("should delete a user by ID", async () => {
    const expectedUser = {
      _id: "5e9f8f8f8f8f8f8f8f8f8f8",
      name: "John Doe",
      email: "john@example.com",
      password: "hashedpassword",
    };

    findByIdAndDeleteStub
      .withArgs("5e9f8f8f8f8f8f8f8f8f8f8")
      .resolves(expectedUser);

    const deletedUser = await User.findByIdAndDelete("5e9f8f8f8f8f8f8f8f8f8f8");

    assert.strictEqual(deletedUser.name, "John Doe");
    assert.strictEqual(deletedUser.email, "john@example.com");
  });
});
