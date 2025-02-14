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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToAirtable = void 0;
/**
 * Send form data to airtable base.
 * @route POST /send-to-airtable
 */
const sendToAirtable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: 'keyCIWaCgtovfq4fn' }).base('appiWMugRGpJ4p3KS');
    if (req.body.startFireCamp == '') {
        req.body.startFireCamp = null;
        req.body.endFireCamp = null;
    }
    base('Table_1').create([
        {
            fields: {
                Full_Name: req.body.fullName,
                Phone: req.body.phone,
                Email: req.body.email,
                Date_of_Birth: req.body.dob,
                Crime_Convicted_of: req.body.crime,
                Date_of_Conviction: req.body.doc,
                City_of_Conviction: req.body.city,
                Case_Number: req.body.case,
                Violent_Offense: req.body.violent,
                Time_in_State_Prison: req.body.statePris,
                Attend_Fire_Camp: req.body.fireCamp,
                Name_Fire_Camp: req.body.fireCampName,
                Fire_Camp_Start_Date: req.body.startFireCamp,
                Fire_Camp_End_Date: req.body.endFireCamp,
                Misdemeanor_or_Felony: req.body.misOrFel,
                Arrested_Since_Last_Conviction: req.body.arrested,
                Currently_on_Probation: req.body.probation,
                Comply_with_Probation_Terms: req.body.probTerms,
                Why_Expungement: req.body.whyExpunge,
                Employment_Situation: req.body.employment,
                Other_Convictions: req.body.otherConvic,
                'Job-readiness/Job-training': req.body.jobTrain,
                Resume_Writing: req.body.resume,
                Social_Services_Help: req.body.socialServices,
                Additional_Notes: req.body.anythingElse
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
    //await send(req);
    //res.sendStatus(200);
});
exports.sendToAirtable = sendToAirtable;
function send(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const Airtable = require('airtable');
        const base = new Airtable({ apiKey: 'keyCIWaCgtovfq4fn' }).base('appiWMugRGpJ4p3KS');
        if (req.body.startFireCamp == '') {
            req.body.startFireCamp = null;
            req.body.endFireCamp = null;
        }
        base('Table_1').create([
            {
                fields: {
                    Full_Name: req.body.fullName,
                    Phone: req.body.phone,
                    Email: req.body.email,
                    Date_of_Birth: req.body.dob,
                    Crime_Convicted_of: req.body.crime,
                    Date_of_Conviction: req.body.doc,
                    City_of_Conviction: req.body.city,
                    Case_Number: req.body.case,
                    Violent_Offense: req.body.violent,
                    Time_in_State_Prison: req.body.statePris,
                    Attend_Fire_Camp: req.body.fireCamp,
                    Name_Fire_Camp: req.body.fireCampName,
                    Fire_Camp_Start_Date: req.body.startFireCamp,
                    Fire_Camp_End_Date: req.body.endFireCamp,
                    Misdemeanor_or_Felony: req.body.misOrFel,
                    Arrested_Since_Last_Conviction: req.body.arrested,
                    Currently_on_Probation: req.body.probation,
                    Comply_with_Probation_Terms: req.body.probTerms,
                    Why_Expungement: req.body.whyExpunge,
                    Employment_Situation: req.body.employment,
                    Other_Convictions: req.body.otherConvic,
                    'Job-readiness/Job-training': req.body.jobTrain,
                    Resume_Writing: req.body.resume,
                    Social_Services_Help: req.body.socialServices,
                    Additional_Notes: req.body.anythingElse
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
}
//# sourceMappingURL=airtableController.js.map