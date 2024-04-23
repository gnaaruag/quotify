import {Schema, model, models} from "mongoose";

const saveModel = new Schema(
  {
	creator: {
		type: String,
		required: true,
	},
	identifier: {
		type: String,
		required: true,
	},  
  }
);

const Quote =  models.Quote || model('Quote', quoteModel);
export default Quote;