"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
const app = (0, express_1.default)();
const port = process.env.PORT || 3030; // default port to listen
app.get('/api', (req, res) => {
    const randomId = `${Math.random()}`.slice(2);
    const path = `/api/item/${randomId}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});
app.post('/api/sendToAirtable', (req, res) => {
    const Airtable = require("airtable");
    const base = new Airtable({ apiKey: "keyCIWaCgtovfq4fn" }).base("appiWMugRGpJ4p3KS");
    if (req.body.startFireCamp == "") {
        req.body.startFireCamp = null;
        req.body.endFireCamp = null;
    }
    base("Table_1").create([
        {
            "fields": {
                "Full_Name": req.body.fullName,
                "Phone": req.body.phone,
                "Email": req.body.email,
                "Date_of_Birth": req.body.dob,
                "Crime_Convicted_of": req.body.crime,
                "Date_of_Conviction": req.body.doc,
                "City_of_Conviction": req.body.city,
                "Case_Number": req.body.case,
                "Violent_Offense": req.body.violent,
                "Time_in_State_Prison": req.body.statePris,
                "Attend_Fire_Camp": req.body.fireCamp,
                "Name_Fire_Camp": req.body.fireCampName,
                "Fire_Camp_Start_Date": req.body.startFireCamp,
                "Fire_Camp_End_Date": req.body.endFireCamp,
                "Misdemeanor_or_Felony": req.body.misOrFel,
                "Arrested_Since_Last_Conviction": req.body.arrested,
                "Currently_on_Probation": req.body.probation,
                "Comply_with_Probation_Terms": req.body.probTerms,
                "Why_Expungement": req.body.whyExpunge,
                "Employment_Situation": req.body.employment,
                "Other_Convictions": req.body.otherConvic,
                "Job-readiness/Job-training": req.body.jobTrain,
                "Resume_Writing": req.body.resume,
                "Social_Services_Help": req.body.socialServices,
                "Additional_Notes": req.body.anythingElse,
            }
        }
    ], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
});
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