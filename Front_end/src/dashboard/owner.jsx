import {useState} from "react";

function Owner() {

    const [msg, setMsg] = useState("");
     
    const topsellingProducts = [
        { 
            name: "Product A", 
            sales: 100 
        },
        { 
            name: "Product B", 
            sales: 80 
        },
        { 
            name: "Product C", 
            sales: 60 
        },
        { 
            name: "Product D", 
            sales: 40 
        },
        { 
            name: "Product E", 
            sales: 20 
        }
    ];

    const topsellers = topsellingProducts.map((product, index) => (
        <div key={index} className="border p-2 mb-2">
            <li>
                {product.name} - Sales: {product.sales}
            </li>
        </div>
    ));

    const hancleClick = async () => {
        try {
            const response = await fetch ("http://localhost:3000/home");

            console.log(response);
            const data = await response.json();
            console.log(data);
            
            setMsg(data.message);
        }
        catch(error) {
            console.log("ERRORRRRRRRRRRRRR!!!!!!!!");
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <h1>Owner Dashboard</h1>
            <p>Welcome to the owner dashboard! Here you can manage your inventory, view sales reports, and update your profile.</p>
            <h2>Top Sellers</h2>
            <ul>
                {topsellers}
            </ul>
            <button className="border" onClick={hancleClick}>Click me</button>

            <p>{msg}</p>
        </>
    );

}

export default Owner;