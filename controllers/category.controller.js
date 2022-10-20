const CategoryServices = require("../services/category.service");

//function to get Categories
const getCategories = async (req, res) => {
  const allcategoriesData = await CategoryServices.getAllCategories();
  return res.json({
    message: "Sucessfully Fetched the categories",
    sucess: true,
    code: 200,
    data: allcategoriesData,
  });
};

// function to create a cartegories
const createCategory = async (req, res) => {
  const response = await CategoryServices.createNewCategory(req.body);
  return res.json({
    message: "Sucessfully Created the category",
    sucess: true,
    code: 201,
    data: response,
  });
};

// function to get category by id
const getCategoriesById = async (req, res) => {
  const response = await CategoryServices.getCategoriesById(req.params.id);
  return res.json({
    message: "Sucessfully fetched the category",
    sucess: true,
    code: 200,
    data: response,
  });
};

// function to get category by name
const getCategoriesByName = async (req, res) => {
  const response = await CategoryServices.getCategoriesByName(req.query.name);
  return res.json({
    message: "Sucessfully fetched the category",
    sucess: true,
    code: 200,
    data: response,
  });
};

const updateCategory = async (req, res) => {
  const response = await CategoryServices.updateCategory(
    req.params.id,
    req.body
  );
  return res.json({
    message: "Sucessfully updated the category",
    sucess: true,
    code: 201,
    data: response,
  });
};
module.exports = {
  getCategories,
  createCategory,
  getCategoriesById,
  getCategoriesByName,
  updateCategory,
};

//  (req,res)=>{
//     res.send("welcome to Home Page");
// }

//  app.get("/home")
