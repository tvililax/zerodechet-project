/*
Import
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const ejs = require('ejs');
    const bcrypt = require('bcryptjs');

    // Inner
    const mongoDB = require('./services/db.service');
    const Models = require('./models/index');
    const Mandatories = require('./services/mandatory.service')
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('./services/response.service');
    const { checkFields } = require('./services/request.service');
    const { cryptData, decryptData } = require('./services/crypto.service');
    // const { uploadImage } = require('./services/media.service');
