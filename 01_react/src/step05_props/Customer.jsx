import React from "react";

class Customer extends React.Component{

    render(){
        const {id, name, orders} = this.props;
        return(
            <div>
                <h2></h2>
                <p>
                    <span>이름 : {name}</span><br />
                    <span>주문배송 : {orders.length} 개</span><br />
                </p>
            </div>
        )
    }
}

export default Customer;