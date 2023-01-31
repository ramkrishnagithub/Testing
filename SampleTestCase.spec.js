const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const Logout = require("../pageobjects/logout");
const fs = require("fs");
const path = require("path");
const otherPage = require("../pageobjects/other.page");
const otherloginparameters = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../testdata/login.json"))
);

const loginparameters = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../testdata/login.json"))
);
const otherlogin = loginparameters.sample;

const login = loginparameters.sample;

describe("Test", async () => {
  it("Validate  Login", async () => {
  
  
   });
});
