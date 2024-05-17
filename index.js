import React from "react"
import ReactDOM from "react-dom/client"


const Header=()=>{
    return (
        <div className="header">
           <div className="logo-container">
              <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F500%2F121%2Foriginal%2Ffood-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg&f=1&nofb=1&ipt=532d90749475f6573342691332b3a2971c54f0d9cbe1365c2a42f265de678a71&ipo=images" alt="logo" loading="lazyhttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F500%2F121%2Foriginal%2Ffood-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg&f=1&nofb=1&ipt=532d90749475f6573342691332b3a2971c54f0d9cbe1365c2a42f265de678a71&ipo=images" />
           </div>
           <div className="nav-items">
              <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
              </ul>
           </div>

        </div>
    )
}

const styleCard={   
    backgroundColor:"#f0f0f0"
}

const RestCard=({resName,ratting,cuisine})=>{
    return(
        <div className="res-card" style={styleCard}>
          <img  className="cart-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4027a3380548c9e53cabb29c35233e24" alt="Cart" />
          <h3>{resName}</h3>
          <h3>{cuisine}</h3>
          <h4>{ratting}</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
           <div className="search"> Search </div>
           <div className="res-container" >
                <RestCard resName="Meghan Cart"  cuisine="Indian Asian"  ratting="4.4" />
                <RestCard  resName="KRC"  cuisine="NON  VEG" ratting="4.1"/>

           </div>
        </div>
    )
}

const AppLayout=()=>{

    return (
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
 
}

const root =ReactDOM.createRoot(document.getElementById("root"))
//root.render(jsxHeading)
root.render(<AppLayout/>)