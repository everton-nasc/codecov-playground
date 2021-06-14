const shop = require('../routes/shop');
const express = require('express');
const request = require('supertest');

const app = express();

describe('Admin Route Tests', function() {
    it('should get 200 code from shop', () => {
        app.use(express.urlencoded({ extended: false}));
        app.use("/", shop);
        console.log("AAA");
    });

});
