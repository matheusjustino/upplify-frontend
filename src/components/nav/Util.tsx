import axios from 'axios';

export default {
    formatCurrency: function (num: Number) {
        //return "$" + Number(num.toFixed(2)).toLocaleString() + " ";
        return "$" + num.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });
    },
    getAllItems: () => {
        return axios.get("https://backend-upplify.herokuapp.com/");//http://localhost:3001/"
    },
    getFilteredItems: function (filter: string) {
        const items: any = axios.get(`https://backend-upplify.herokuapp.com/${filter}`).then(res => {
            return res.data
        });
        return items;
    },
    Add: function (productList: never[], product: any) {
        let newProds: any = [];
        let noArray = false;
        productList.forEach((element: any) => {
            if (element._id === product._id) {
                element.count++;
                noArray = true;
            }
            newProds.push(element);
        });
        if (!noArray) {
            newProds.push({ ...product, count: 1 });
        }
        return newProds;
    },
    Remove: function (productList: never[], product: any) {
        let newProds: any;
        for (let i = 0; i < productList.length; i++) {
            const itemS: any = productList[i];
            if (itemS._id === product._id) {
                if (itemS.count > 1) {
                    itemS.count--;
                    newProds = productList.map(item => item);
                    break;
                } else {
                    newProds = productList.filter((item: any) => item._id !== product._id);
                    break;
                }
            }
        }
        return newProds;
    }
}