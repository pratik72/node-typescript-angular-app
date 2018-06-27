"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fbgraph_1 = __importDefault(require("fbgraph"));
exports.getApi = (req, res) => {
    res.render("api/index", {
        title: "API Examples"
    });
};
exports.getFacebook = (req, res, next) => {
    const token = req.user.tokens.find((token) => token.kind === "facebook");
    fbgraph_1.default.setAccessToken(token.accessToken);
    fbgraph_1.default.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, results) => {
        if (err) {
            return next(err);
        }
        res.render("api/facebook", {
            title: "Facebook API",
            profile: results
        });
    });
};
