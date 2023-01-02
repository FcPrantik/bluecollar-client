import { useEffect, useState } from "react";

const usePlans = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plan')
        .then(res => res.json())
        .then(data => setPlans(data));
    }, [])
    return [plans, setPlans];
}

export default usePlans;