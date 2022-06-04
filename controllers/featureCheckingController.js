const allFeature = require("../features.json");

exports.getFeatures = async (req, res, next) => {
  // fetch email and location from parameters
  const { email, location } = req.query;
  // console.log(email, location);
  try {
    const filteredFeature = allFeature.filter((feature) => {
      // email filter
      if (feature.enabledEmails.length > 0) {
        if (email && feature.enabledEmails.includes(email)) return true;
        else return false;
      }
      // included countries filter
      if (feature.includedCountries.length > 0) {
        if (location && feature.includedCountries.includes(location))
          return true;
        else return false;
      }
      // excluded countries filter
      if (feature.excludedCountries.length > 0) {
        if (location && feature.excludedCountries.includes(location))
          return false;
        else return true;
      }
      // enabled for all users if all criteria is empty
      return true;
    });

    res
      .status(200)
      .json({ totalCount: filteredFeature.length, items: filteredFeature });
  } catch (error) {
    next(error);
  }
};
