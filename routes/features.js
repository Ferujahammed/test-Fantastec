const express = require("express");

const Feature = require('../controllers/featureCheckingController')

const router = express.Router();

router.route("/").get(Feature.getFeatures);

module.exports = router;
