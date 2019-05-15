import React from "react";
import "./App.css";
import Header from './components/Header';
import SubHeader from "./components/SubHeader";
import ImageSlider from "./components/ImageSlider";
import Productdetail from "./components/Productdetail";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import state from './state';


function App(props) {
	const filtered = state.products.filter((product, i)=> {
		return product.category === props.currentCategory
	})
	console.log(filtered)
	return (
		<div className="App">
			<div className="wrap">
				<div className="header">


				<Header></Header>

					<div className="clear"> </div>


					<SubHeader></SubHeader>


					<div className="clear"> </div>

					
				<TopNav categoryFunc={props.categoryFunc}/>

				</div>
				
			
				<ImageSlider></ImageSlider>
					

				<div className="content">
					<div className="products-box">

						<div className="products">
							<h5><span>FEATURED</span> PRODUCTS</h5>
							<div className="section group">
							{
								filtered.map((product)=>{
									return (
											<Productdetail product={product}/>
									)
								})
							}
							
							</div>
						</div>

						<div className="products products-secondbox">
							<h5><span>Our</span> Specials</h5>
							<div className="section group">

							</div>
						</div>
					</div>
				</div>


				<div className="clear"> </div>


				<Footer></Footer>


			</div>

		</div>
	);
}

export default App;
