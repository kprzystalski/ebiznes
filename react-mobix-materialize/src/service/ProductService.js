import constants from "./Constants";

class ProductService {

    getAll = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request(constants.url + "product/json", options);
        const response = await fetch(request);
        return response.json();
    }

    getAllByCategoryId = async (categoryId) => {
        const options = {
            method: "GET",
        }
        const request = new Request(constants.url + "category/" + categoryId + "/product/json", options);
        const response = await fetch(request);
        return response.json();
    }
}

export default ProductService;
