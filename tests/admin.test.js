const admin = require('../routes/admin');
const express = require('express');
const request = require('supertest');

const app = express();
app.use(express.urlencoded({ extended: false}));
app.use("/", admin);
describe('Admin Route Tests', function() {
    it('should get 200 code from index', () => {

    });

    it('should get 200 code from endpoint add-product', () => {
        
    });
});
