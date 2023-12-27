import express from "express";
import nodemailer from "nodemailer";  
import movieModel from "./model/movieSchema.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("You are online..");
});




// for mail method 
router.post('/sendemail', async (req, res) => {
    const data = req.body;
    console.log(data);  
    const { id, title, overview, release_date, vote_average } = data.detail;
  
     
      try {
        const newMovie = new movieModel({
            id,
            title,
            overview,
            release_date,
            vote_average,
        });

        await newMovie.save()
        .then(() => {
            console.log("Movie details saved successfully.");
            // ... other code
          })
          .catch(error => {
            console.error('Error saving movie:', error);
            res.status(500).json({ status: 500, error: error.message });
          });

        console.log("Movie details saved successfully222222.");
 
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, error: error.message });
    }
});

export default router;
