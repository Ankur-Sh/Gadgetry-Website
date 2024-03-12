import express from "express";
import Gadgets from "../models/Gadgets.js";
import { exportedUrl } from "../index.js";
const router = express.Router();

export const createGadget = async (req, res) => {
    const gadget = req.body;
    const newGadget = new Gadgets({
        ...gadget,
        imageUrl: exportedUrl,
    });
    try {
        await newGadget.save();
        console.log("data saved in database");
        res.status(201).json(newGadget);
    } catch (error) {
        console.log("data not saved in database");
        res.status(409).json({ message: error.message });
    }
};

export const getGadgets = async (req, res) => {
    try {
        const gadgets = await Gadgets.find();
        res.json({
            data: gadgets,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getGadget = async (req, res) => {
    const { id } = req.params;
    try {
        const gadget = await Gadgets.findById(id);
        res.status(200).json(gadget);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default router;
