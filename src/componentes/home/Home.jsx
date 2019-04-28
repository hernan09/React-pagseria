import React ,{Component} from 'react'
import { Row, Col } from 'antd';
import { Collapse } from 'antd';


import './home.css'

const Panel = Collapse.Panel
function callback(key) {
	console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
class Home extends Component{
	constructor(){
		super()
		this.state={
			pelis:[]
		}
	}

componentDidMount(){
	fetch("http://localhost:4000/pelis").then(resp=>resp.json()).then(pelis=>{

	    this.setState({
				pelis:pelis.pelis
			})
	})
}
  render(){
	  let pelis=this.state.pelis.map((peli,i)=>{
		  return(


						<img id="imgHome" key={i} src={peli.img} style={{ width: 300, height: 300 }} alt=""></img>





		  )
	  })
      return(
          <div id="home">
              <Row>
                  <Col span={24}>
							<blockquote id="encabezado" style={{color:"black"}} className="blockquote text-center">
							 <h1 id="h1home" style={{color:"black"}}><strong style={{color:"orange"}}>W</strong>elcome</h1>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>

				         </Col>
             </Row>
              <Row>
                  <Col span={24}>

							<blockquote className="blockquote text-center">
								<div className="jumbotron2" style={{ color: "black" }}>

									<h3 style={{ color: "black" }}><strong style={{color:"orange"}}>M</strong>ilenian</h3>
									<hr className="my-4"></hr>
									<p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad optio exercitationem dolorem est! Quasi non nesciunt rerum nisi sed maiores adipisci, tempore quo aspernatur nostrum natus officia expedita eum architecto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas natus voluptatibus quam excepturi, ipsum nobis fugit! Dolorum, ad doloremque rerum nulla modi praesentium repellat quisquam nam perferendis temporibus officiis error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo, perspiciatis amet deleniti dolorum consequuntur iure vero sit. Necessitatibus soluta minus omnis officiis. Porro ut nemo eius  .</p>

								</div>
							</blockquote>

									</Col>


              </Row>
			  <Row>
				  <Col span={24}>
					  <blockquote id="piepag" className="blockquote text-center">
						  <button className="btn btn-warning">More</button>
					  </blockquote>
					  <blockquote className="blockquote text-center" style={{marginTop:100}}>

					  </blockquote>
				  </Col>
			  </Row>

          </div>

      )
  }


}

export default Home