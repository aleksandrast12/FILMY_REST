export default class Movie {
    PositiveReviewCounter=0;
    NegativeReviewCounter=0;
    constructor(Title, Director, PositiveReviewCounter, NegativeReviewCounter){
        this.Title=Title;
        this.Director=Director;
         }
         get id(){
           return this.Title.toLowerCase().replaceAll(" ","");
         }

         recordPositiveSentimentReview(){
            this.PositiveReviewCounter++
        
         }
         recordNegativeSentimentReview(){
            this.NegativeReviewCounter++
         }
         toJSON(){
            return{
                Title: this.Title,
                Director: this.Director,
                PositiveSentimentReview: this.PositiveReviewCounter,
                NegativeSentimentReview: this.NegativeReviewCounter

            }
         }
}