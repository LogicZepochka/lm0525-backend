"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidator = void 0;
const express_validator_1 = require("express-validator");
exports.AuthValidator = [
    (0, express_validator_1.body)("phone")
];
