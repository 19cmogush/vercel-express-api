"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController = __importStar(require("./controllers"));
const cors_1 = __importDefault(require("cors"));
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
var bodyParser = require('body-parser');
const app = (0, express_1.default)();
const port = process.env.PORT || 3030; // default port to listen
app.use(bodyParser.json());
app.use((0, cors_1.default)());
app.get('/api', (req, res) => {
    const randomId = `${Math.random()}`.slice(2);
    const path = `/api/item/${randomId}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});
app.post('/api/sendToAirtable', userController.sendToAirtable);
app.get('/api/item/:itemId', (req, res) => {
    const { itemId } = req.params;
    res.json({ itemId });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map