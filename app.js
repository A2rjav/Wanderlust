    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const util = require("util");
    const Listing = require("./models/listing.js");
    const path = require ("path");
    const methodOverride = require("method-override");
    const ejsMate = require("ejs-mate");
    const wrapAsync= require("./utils/wrapasync.js");
    const ExpressError=require("./utils/ExpressError.js");
    const {listingSchema} = require("./schema.js")

    // these two middlewares(built in) that are used to read form data(req.body ) 
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));

    app.use(methodOverride("_method"))
    app.engine("ejs",ejsMate);
    app.use(express.static(path.join(__dirname,"/public")));    

    app.get("/", (req, res) => {
        res.send("Hi, I am root");
    });

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname,"views"));

    // it is used to parse the data that we extract from link
    app.use(express.urlencoded({extended : true}));

    // app.get("/testListing", async (req, res) => {
    //     let sampleListing = new Listing({
    //         title: "my new villa",
    //         description: "By the beach",
    //         price: 1200,
    //         location: "Goa",
    //         country: "India",
    //     });

    //     await sampleListing.save();
    //     console.log("sample was saved");
    //     res.send("successful testing");
    // });

    async function main() {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust", {
        });
        console.log("connected to DB");
    }

    main().catch((err) => {
        console.log(err);
    });

    // app.use((err, req, res, next) => {
    //     console.error(err.stack);
    //     res.status(500).send('Something broke!');
    // });


    // Index route
    app.get("/listings", wrapAsync(async(req,res)=>{
        const allListings = await Listing.find({});
        res.render("./listings/index.ejs",{allListings});
    })
);

    // new route
    app.get("/listings/new",(req,res)=>{
        res.render("listings/new.ejs")
    })

    // This route comes after above /new otherwise it could take new as an id
    app.get("/listing/:id", wrapAsync(async (req,res)=>{
        let {id} =req.params;
        const listing=await Listing.findById(id);
        res.render("listings/show.ejs", {listing });
    })
);

    //Create route
    app.post("/listings",wrapAsync(async(req,res,next)=>{
        const { error } = listingSchema.validate(req.body);
        if (error) {
            throw new ExpressError(error.details[0].message, 400);
        }
        console.log(req.body);
        const newlisting = new Listing(req.body.listing);
        await newlisting.save();
        res.redirect("/listings");
        })
    );

    app.get("/listings/:id/edit",wrapAsync(async(req,res)=>{
        let {id} =req.params;
        const listing=await Listing.findById(id);
        res.render("listings/edit.ejs",{listing})
    })
);


    app.put("/listings/:id",wrapAsync(async(req,res)=>{
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id,{...req.body.listing})
        res.redirect(`/listing/${id}`);
    })
);

    // Delete route
    app.delete("/listings/:id",wrapAsync(async(req,res)=>{
        let {id}=req.params;
        let deletedLisitng =await Listing.findByIdAndDelete(id);
        console.log(deletedLisitng);
        res.redirect("/listings");
    })
);

    app.all("*",(req,res,next) =>{
        next(new ExpressError(404,"page not found!")); 
    }); 

    app.use((err, req, res, next) => {
        let { statusCode = 500, message = "Something went wrong" } = err;
        res.status(statusCode).render("listings/error", { err });
    });

    app.listen(8081, () => {
        console.log("port:8081 connected successfully");
    });
        