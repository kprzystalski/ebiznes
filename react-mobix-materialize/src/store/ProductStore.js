import ProductService from '../service/ProductService'
import {computed, decorate, observable, runInAction} from "mobx";

class ProductStore {
    constructor() {
        this.productService = new ProductService()
    }

    productData = [];
    searchPhrase = '';
    status = 'initial';

    getProductsAsync = async () => {
        try {
            const data = await this.productService.getAll();
            runInAction(() => {
                this.productData = data;
            })
        } catch (e) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    getProductsByCategoryIdAsync = async (categoryId) => {
        try {
            const data = await this.productService.getAllByCategoryId(categoryId);
            runInAction(() => {
                this.productData = data;
            })
        } catch (e) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    get filteredProducts() {
        if (this.searchPhrase.length !== 0) {
            return this.productData
                .filter(product => product.name.toLowerCase().includes(this.searchPhrase.toLowerCase()))
        }
        return this.productData;
    }
}

decorate(ProductStore, {
    productData: observable,
    status: observable,
    searchPhrase: observable,
    filteredProducts: computed
});

export default new ProductStore();
