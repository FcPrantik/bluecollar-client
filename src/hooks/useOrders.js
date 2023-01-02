import { useEffect, useState } from "react";

const useOrders = () => {

    const [orderlist, setOrderlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/orderlist')
        .then(res => res.json())
        .then(data => setOrderlist(data));
    }, [])
    return [orderlist, setOrderlist];
}

export default useOrders;