const mongoose = require("mongoose");

const surveySchema = mongoose.Schema(
      {
        facilityScore: {
          type: Number,
        },
        bookingScore: [{
          type: String
        }],
        physicianDetail: [{
          type: String
        }],
        appointmentFeedback: {
            type: String
        },
        injuryDetail: [{
            type: String
        }],
        exercise: {
          type: String
        },
        exerciseDetails: [{
          type: String
        }],
      },
    {
        timestamps: true,
    }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports.Survey = Survey;

module.exports = {
    Survey,
};

// {
//   "facilityScore": 10,
//   "bookingScore": "rating3",
//   "physicianDetail": "sdjdd",
//   "appointmentFeedback": "Yes",
//   "injuryDetail": [
//      "strokes",
//      "fainting"
//   ],
//   "exercise": true,
//   "exerciseDetails": [
//      "four"
//   ]
// }