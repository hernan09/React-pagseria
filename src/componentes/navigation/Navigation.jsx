import React ,{Component} from 'react'
import { Carousel } from 'antd';
import './navigation.css'

class Navigation extends Component{
   constructor(){
       super()
       this.state={
        pelis:[]
       }
	 }
	 componentDidMount = () => {
		  fetch(`http://localhost:4000/pelis`).then(res=>res.json()).then(pelis=>{
        this.setState({
					pelis:pelis.pelis
				})
			})
	 }


   render(){
		 let pelis=this.state.pelis.map((peli,i)=>{
			 return(<img key={i} src={peli.img}></img>)
		 })
         return(
				 <div>
						 <div id="navigation">
							 <blockquote className="blockquote text-center">
								 <div className="jumbotron" style={{ height: "100%" }}>
									 <h1 className="display-3">Hello, world!</h1>
									 <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
									 <hr className="my-4"></hr>
									 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
									 <p className="lead">
										 <a className="btn btn-dark btn-default" href="#" role="button">Learn more</a>
									 </p>
								 </div>
							 </blockquote>
					 <Carousel style={{ width: "100%", height: 300 }} autoplay effect="fade" >
								 {pelis}
							 </Carousel>
							 <div>
								 <blockquote className="blockquote text-center">
									 <div className="jumbotron" style={{ height: "100%" }}>
										 <h1 className="display-3">Hello, world!</h1>
										 <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
										 <hr className="my-4"></hr>
										 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
										 <p className="lead">
											 <a className="btn btn-dark btn-default" href="#" role="button">Learn more</a>
										 </p>
									 </div>
								 </blockquote>


							 </div>

						 </div>

				 </div>

				 )
   }

}

export default Navigation