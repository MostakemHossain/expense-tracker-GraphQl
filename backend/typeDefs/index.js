import { mergeResolvers } from "@graphql-tools/merge";
import transactionTypeDef from "./transaction.typeDef.js";
import userTypeDef from "./user.typeDef.js";


const mergedTypeDef= mergeResolvers([userTypeDef,transactionTypeDef]);

export default mergedTypeDef; 