const{category}= require('../models/index');

const getAllCategories = async() =>{
    const allcategoriesData = await category.findAll();
    // console.log(allcategoriesData)
    return allcategoriesData;
}

const createNewCategory = async(data)=> {
    const newCategory= await category.create({name: data.name, description:data.description})
    return newCategory;

}

const getCategoriesById = async (idData) => {
    const response = await category.findAll({
         where : {
            id: idData
         }
    })
    return response;
}

const getCategoriesByName = async (nameData) => {
    const response = await category.findAll({
         where : {
            name: nameData
         }
    })
    return response;
}

const updateCategory = async (id, data) => {
    const response = await category.update(
        {
            name : data.name,
            description : data.description
        },
        {
            where: {
                 id:id
            }
        })
        return response;
}


module.exports = {updateCategory,getCategoriesByName,getCategoriesById,createNewCategory,getAllCategories};