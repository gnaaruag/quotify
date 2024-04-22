import {Schema, model, models} from "mongoose";

const quoteModel = new Schema(
  {
	quote: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		default: "",
	},
	creator: {
		type: String,
		required: true,
	},
	identifier: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		default: 0,
	}
  }
);

const Quote =  models.Quote || model('Quote', quoteModel);
export default Quote;