import { Router } from "express";
import MovieBase from "./MovieBase.js";

const SentAnalysisService = Router();

SentAnalysisService.get("/movie/:title", (req, res) => {
    let Title = req.params.title;
    let Movie = MovieBase.get(Title);
    if (Movie) {
        res.json(Movie);
    } else {
        res.status(404).json({
            error: "We don't have this movie in our base",
        });
    }
});
SentAnalysisService.post("/movie/:title/review",
    (req, res) => {
        let Title = req.params.title;
        let review = req.body;

        if(typeof review != "string"){
            res.sendStatus(400);
            return
        }
        let Type = MovieBase.reviewMovie(Title, review);
        if (Type) {
            res.send(Type);
        } else {
            res.status(404).send("We don't have this movie in our base");
        }
});

export default SentAnalysisService;
