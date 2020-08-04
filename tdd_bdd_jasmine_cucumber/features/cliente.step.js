const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const driverPath = "E:/Cursos/Gama_Academy_VTEX/Aulas/Testes/tdd_bdd_jasmine_cucumber/driver/chromedriver.exe";
const serviceBuilder = new ServiceBuilder(driverPath);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I have \{string} clients in my database', function (string) {
  console.log("Os dados foram inseridos na base de dados.");
});

When('I access the home webpage', async function () {
  await driver.get('http://localhost:3000');
  await driver.sleep(1000);
});

Then('I see the list of \{string} items', async function (string) {
  const quantidade = await driver.findElements(By.css('tbody tr'));
  assert.equal(quantidade.length, parseInt(string));
  await driver.quit();
});