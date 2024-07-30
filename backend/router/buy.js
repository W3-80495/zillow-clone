const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const utils = require("../utils");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      where: {
        status: "For Sale",
      },
    });
    res.status(200).json(utils.createSuccess(properties));
  } catch (ex) {
    res.status(500).json(utils.createError("Failed to retrieve properties"));
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    state,
    zipCode,
    latitude,
    longitude,
    type,
    userId,
  } = req.body;
  try {
    const newProperty = await prisma.property.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        state,
        zipCode,
        latitude,
        longitude,
        type,
        status: "For Sale",
        userId,
      },
    });
    res.status(201).json(utils.createSuccess(newProperty));
  } catch (error) {
    res.status(500).json(utils.createError("Failed to create property"));
  }
});

module.exports = router;
