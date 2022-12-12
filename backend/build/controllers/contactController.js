"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
var smtpTransport = nodemailer_1.default.createTransport({
    host: 'smtp.zoho.com',
    auth: {
        user: 'cmogush@zohomail.com',
        pass: process.env.EMAIL_PASS
    }
});
function mailData(data) {
    return {
        from: 'cmogush@zohomail.com',
        to: 'cmogush19@gmail.com',
        subject: `Contact Request from ${data.name}`,
        text: `${data.message}`,
        html: `
      <p><b>Name: </b>${data.name}</p>
      <p><b>Phone: </b>${data.phone}</p>
      <p><b>E-mail: </b>${data.email}</p>
      <p><b>Company: </b>${data.company}</p>
      <p><b>Message: </b>${data.message}</p>`
    };
}
const sendContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Request:\n" + req)
    console.log(req.body);
    yield smtpTransport.sendMail(mailData(req.body), function (err, info) {
        if (err) {
            console.log('ERROR details:');
            console.log(err);
            return res.json(err).send(401);
        }
        else {
            console.log('SUCCESS details:');
            console.log(info);
            return res.json(info).send(201);
        }
    });
});
exports.sendContact = sendContact;
//# sourceMappingURL=contactController.js.map