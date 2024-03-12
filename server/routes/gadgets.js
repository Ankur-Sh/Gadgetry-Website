import express from "express";
import { getGadgets, getGadget, createGadget } from "../controllers/gadgets.js";
const router = express.Router();

router.get("/", getGadgets);
router.get("/:id", getGadget);
router.post("/", createGadget);
// router.post("/create-checkout-session", async (req, res) => {
//     const { products } = req.body;
//     const lineItems = products.map((product) => ({
//         price_data: {
//             currency: "usd",
//             product_data: {
//                 name: product.name,
//                 images: [product.image],
//             },
//             unit_amount: Math.round(product.price * 100),
//         },
//         quantity: product.quantity,
//     }));
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             success_url: "http://localhost:3000/page",
//             cancel_url: "http://localhost:3000/like",
//         });

//         res.json({ id: session.id });
//     } catch (error) {
//         console.error("Error creating checkout session:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });
export default router;
