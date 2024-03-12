import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import admin from "firebase-admin";
import serviceAccount from "./firebase.js";
import mongoose from "mongoose";
import cors from "cors";
import gadgetRoutes from "./routes/gadgets.js";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
// import router from "./routes/gadgets.js";
const app = express();
/**/
const myUuid = uuidv4();
const stripe = new Stripe(
    "sk_test_51Oqw7xSJ9xxwbGFGpytkHm0RivjaVrjWjoo0VOySbIYgLQLcJggfnM0CNdzsqpjqH3X1n2CHcQ8qI44Svj5Gj6jK00Ni8dbZN0"
);
/**/
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(bodyParser.json());
// app.use("/stripe", router);
// Firebase setup
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://gadgetry.appspot.com",
});
// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Express route for uploading image to Firebase Storage and saving URL to MongoDB
let exportedUrl;
/**/
app.post("/payment", (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);
    const idempotencyKey = uuidv4();
    return stripe.customers
        .create({
            email: token.email,
            source: token.id,
        })
        .then((customer) => {
            stripe.charges.create(
                {
                    amount: product.price * 100,
                    currency: "usd",
                    customer: customer.id,
                    receipt_email: token.email,
                    description: `purchase of ${product.name}`,
                    shipping: {
                        name: token.card.name,
                        address: {
                            country: token.card.address_country,
                        },
                    },
                },
                { idempotencyKey }
            );
        })
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
});
/**/
app.post("/upload", upload.single("image"), async (req, res) => {
    try {
        // Upload image to Firebase Storage
        const bucket = admin.storage().bucket();
        const file = bucket.file(req.file.originalname);
        const stream = file.createWriteStream({
            metadata: { contentType: req.file.mimetype },
        });
        stream.end(req.file.buffer);
        // Get image URL from Firebase Storage
        const [url] = await file.getSignedUrl({
            action: "read",
            expires: "01-01-2030",
        });
        res.status(200).json({ imageUrl: url });
        //Exporting url to controller to save firebase url in mongodb
        exportedUrl = url;
    } catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ error: "Internal Server Error" });
        exportedValue = null;
    }
});

app.use("/gadgets", gadgetRoutes);
const CONNECTION_URL =
    "mongodb+srv://asblaster100:gadgetry@cluster0.skulxzp.mongodb.net/";
const PORT = process.env.PORT || 5001;
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect`));
export { exportedUrl };
