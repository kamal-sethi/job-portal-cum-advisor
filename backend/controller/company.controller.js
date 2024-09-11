import { company } from "../models/company.model";
export const registerCompany = async (req, res) => {
  try {
    const { name, address, location, no_of_employees, description } = req.body;
    if (!name || !address || !location || !no_of_employees || !description) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const existingCompany = await company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        message: "This company is already registered",
        success: false,
      });
    }
    const newCompany = await company.create({
      name,
      address,
      location,
      no_of_employees,
      description,
      userId: req.id,
    });
    return res.status(201).json({
      message: "company is registered successfully",
      success: true,
      newCompany,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all companies created by a specific user

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    if (!userId) {
      return res.status(400).json({
        message: "user is invalid",
        success: false,
      });
    }

    const fetchCompany = await company.find({ userId });
    if (!fetchCompany) {
      return res.status(404).json({
        message: "No company is registered by this user",
        success: false,
      });
    }
    return res.status(400).json({
      message: "Company is fetched successfully",
      success: true,
      fetchCompany,
    });
  } catch (error) {
    console.log(error);
  }
};

//get a company by company id

export const getSingleCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const findCompany = await company.findById(companyId);
    if (!findCompany) {
      return res.status(404).json({
        message: "no company is found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company is fetched successfully",
      success: true,
      findCompany,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, no_of_employees, location, address } = req.body;
    const file = req.file;

    const update = { name, description, no_of_employees, location, address };

    const updateData = await company.findOneAndUpdate(req.params.id, update, {
      new: true,
    });

    if (!updateData) {
      return res.status(400).json({
        message: "company is not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "company's data is updated successfully",
      success: true,
      updateData,
    });
  } catch (error) {
    console.log(error);
  }
};
