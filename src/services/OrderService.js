import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8080/api/v1/order";

class OrderService {

    addToOrder(order) {
        console.log(order)
        console.log(ORDER_API_BASE_URL+'/placeOrder/',order)
        return axios.post(ORDER_API_BASE_URL+'/placeOrder/',order);
    }

    viewOrderByUserId(userid) {
        console.log(userid)
        return axios.get(ORDER_API_BASE_URL+'/userid/',userid);
    }

    getOrderById(orderid) {
        console.log(orderid)
        return axios.get(ORDER_API_BASE_URL+'/order/',orderid);
    }

    getOrders(){
        console.log("getorder")
        return axios.get(ORDER_API_BASE_URL+'/getallorder');
    }

    // createOrder(order){
        
    //     return axios.post(ORDER_API_BASE_URL+'/placeOrder/', order);
    // }
}

export default new OrderService()