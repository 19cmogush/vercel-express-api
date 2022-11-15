import { Request, Response, NextFunction } from 'express';
import Airtable, { Base } from 'airtable';

/**
 * Send form data to airtable base.
 * @route POST /send-to-airtable
 */
export const sendToAirtable = async (req: Request, res: Response) => {
  const Airtable = require('airtable');
  const base = new Airtable({ apiKey: 'keyCIWaCgtovfq4fn' }).base('appiWMugRGpJ4p3KS');
  if (req.body.startFireCamp == '') {
    req.body.startFireCamp = null;
    req.body.endFireCamp = null;
  }
  base('Table_1').create(
    [
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
    ],
    function (err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record: any) {
        console.log(record.getId());
      });
    }
  );

  // export const updateAccount = async (req: Request, res: Response) => {
  //   const user = req.user as User;

  //   await user.update({
  //     email: req.body.email,
  //   });

  //   return res.json(user);
  // };
  res.sendStatus(200);
};
