import React, { Component } from 'react'
import OrderService from '../../services/OrderService';

class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {
                userId: 4
            },
            cart: {
                cartId: 58,
            },
            orderDate: "",
            shippingAddress: "",
        }
        this.changeUserHandler = this.changeUserHandler.bind(this);
        this.changeCartHandler = this.changeCartHandler.bind(this);
        this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
        this.changeShippingAddressHandler =  this.changeShippingAddressHandler.bind(this);
    
        this.saveOrder = this.saveOrder.bind(this);
    }


    componentDidMount(){
        
    }
    saveOrder = (e) => {
        e.preventDefault();
        let order = { 
            user:{
                userId: this.state.user
            } ,
            cart: {
               cartId: this.state.cart, 
            },
            orderDate: this.state.orderDate, 
            orderShippingAddress: this.state.shippingAddress
        };
        console.log('order => ' + JSON.stringify(order));
            console.log(order)
            OrderService.addToOrder(order).then(res =>{
               // this.props.history.push('/order');
            });

    }
    
    changeUserHandler= (event) => {
        this.setState({user: event.target.value});
    }

    changeCartHandler= (event) => {
        this.setState({cart: event.target.value});
    }
    changeOrderDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }

    changeShippingAddressHandler= (event) => {
        this.setState({shippingAddress: event.target.value});
    }

    cancel(){
        this.props.history.push('/order');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>ADD TO ORDER TEST FILE</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User: </label>
                                            <input type="number" placeholder="User" name="user" className="form-control" 
                                                value={this.state.user} onChange={this.changeUserHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cart: </label>
                                            <input type="number" placeholder="Cart" name="cart" className="form-control" 
                                                value={this.state.cart} onChange={this.changeCartHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Order Date: </label>
                                            <input type="text" placeholder="Order Date" name="AUTOMATICALLY ENTERS TODAYS DATE" className="form-control" 
                                                value={this.state.orderDate} onChange={this.changeOrderDateHandler} readonly disabled/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Shipping Address: </label>
                                            <input placeholder="Shipping Address" name="shippingAddress" className="form-control" 
                                                value={this.state.shippingAddress} onChange={this.changeShippingAddressHandler}/>
                                        </div>
                                      
                                        <button className="btn btn-success" onClick={this.saveOrder}>Save Order</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel Order</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateOrderComponent
