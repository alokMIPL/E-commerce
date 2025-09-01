import Address from "../models/address";

export const newAddress = async (req, res) => {
  try {
    const addressData = {
      ...req.body,
      user: req.user._id,   // attach logged-in user
    };

    const address = await Address.create(addressData);

    res.status(201).json({
      success: true,
      address,
    });
  } catch (error) {
    console.error("❌ Error in newAddress:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user._id });

    res.status(200).json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.error("❌ Error in getAddresses:", error);
    res.status(500).json({ message: error.message });
  }
};
