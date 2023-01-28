import  express  from "express";
import MovieBase from "./MovieBase.js";
import Api from "./Api.js"
const SentAnalysisService = express();
SentAnalysisService.use(express.static("public"));
SentAnalysisService.use(express.json());
SentAnalysisService.use(express.text());
SentAnalysisService.use("/api",Api);


SentAnalysisService.listen(process.env.port||8082);


