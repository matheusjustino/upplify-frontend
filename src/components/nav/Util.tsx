export default {
    formatCurrency: function (num: Number) {
        return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
    },
    getAllItems: () => {
        return fetch("http://localhost:3001/food").then(res => {
            return res.json();
        });
    },
    getFilteredItems: function (filter: string) {
        return fetch("http://localhost:3001/food").then(res => {
            return res.json();
        }).then(items => {
            let newFilteredProducts: any = [];
            for (let i = 0; i < items.length; i++) {
                if (items[i].cuisine === filter) {
                    newFilteredProducts.push(items[i]);
                }
            }
            return newFilteredProducts;
        });
    }
}