import axios from 'axios';

export default {
    formatCurrency: function (num: Number) {
        return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
    },
    getAllItems: () => {
        return axios.get("http://localhost:3001/");
    },
    getFilteredItems: async function (filter: string) {
        const items: any = await axios.get("http://localhost:3001/").then(res => {
            return res.data
        });
        let newFilteredProducts: any = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].cuisine === filter) {
                newFilteredProducts.push(items[i]);
            }
        }
        return newFilteredProducts;
    },
    Add: function (listaProdutos: any, novoProduto: any) {
        let newProds: any = [];
        let noArray = false;
        listaProdutos.forEach((element: any) => {
            if (element._id === novoProduto._id) {
                element.count++;
                noArray = true;
            }
            newProds.push(element);
        });
        if (!noArray) {
            newProds.push({ ...novoProduto, count: 1 });
        }
        return newProds;
    }
}