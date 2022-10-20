const CategoryController = require('../controllers/category.controller');


const routes = (app) =>{
    /*route to get all the Categories */
    app.get('/ecomm/api/v1/categories', CategoryController.getCategories);

    //route to create a new category   
    app.post('/ecomm/api/v1/categories',CategoryController.createCategory);

    // routes to get categories by Id
    app.get('/ecomm/api/v1/categories/:id', CategoryController.getCategoriesById);
    
    //routes to get categories by name
    app.get('/ecomm/api/v1/categoriesByName/', CategoryController.getCategoriesByName);

    //routes to update categorry by given id
    app.put('/ecomm/api/v1/categories/:id', CategoryController.updateCategory);

}

module.exports = routes;

