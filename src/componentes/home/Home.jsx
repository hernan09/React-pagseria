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
							<blockquote style={{color:"white"}} className="blockquote text-center">
							 <h1 id="h1home" style={{color:"white"}}><strong style={{color:"orange"}}>W</strong>elcome</h1>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							</blockquote>

				         </Col>
             </Row>
              <Row>
                  <Col span={12}>

							<blockquote className="blockquote text-center">
								<div className="jumbotron2" style={{ color: "white" }}>

									<h3 style={{ color: "white" }}><strong style={{color:"orange"}}>M</strong>ilenian</h3>
									<hr className="my-4"></hr>
									<p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad optio exercitationem dolorem est! Quasi non nesciunt rerum nisi sed maiores adipisci, tempore quo aspernatur nostrum natus officia expedita eum architecto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas natus voluptatibus quam excepturi, ipsum nobis fugit! Dolorum, ad doloremque rerum nulla modi praesentium repellat quisquam nam perferendis temporibus officiis error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo, perspiciatis amet deleniti dolorum consequuntur iure vero sit. Necessitatibus soluta minus omnis officiis. Porro ut nemo eius  .</p>

								</div>
							</blockquote>

									</Col>
                  <Col span={12}>
							<blockquote className="blockquote text-center" style={{color:"white"}}>
								<div className="jumbotron2">

									<h3 style={{ color: "white" }}><strong style={{ color: "orange" }}>W</strong>arbringer</h3>
									<hr className="my-4"></hr>
									<p>It uses utility classes for typography and spacing to space content out within the larger container.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium ea voluptatibus perferendis libero rem corporis tempora molestiae ipsum optio ad, facilis architecto magni doloremque explicabo ex nisi iste et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur, commodi aut explicabo consectetur dolor, tempora obcaecati voluptate eligendi odit unde illum molestiae, veritatis officiis saepe doloribus perspiciatis qui fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus voluptatum odio adipisci omnis et, repudiandae fugit laudantium ex ut eius dolorum corrupti mollitia  </p>

								</div>
							</blockquote>

									 </Col>

              </Row>
			  <Row>
				  <Col span={24}>
					  <blockquote className="blockquote text-center">
						  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
						  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
					  </blockquote>
					  <blockquote className="blockquote text-center" style={{marginBottom:200,marginTop:100}}>
						  <Collapse style={{backgroundColor:"black"}} accordion defaultActiveKey={['0']} onChange={callback}>
									<Panel header={<h1 style={{color:"white"}}><strong style={{color:"orange"}}>G</strong>alery</h1>} key="1">
                  {pelis}
							  </Panel>
									<Panel header={<h1 style={{ color: "white" }}><strong style={{ color: "orange" }}>T</strong>his</h1>} key="2">
								  <p>{text}</p>
							  </Panel>
									<Panel header={<h1 style={{ color: "white" }}><strong style={{ color: "orange" }}>M</strong>oment</h1>} key="3" >
								  <p>{text}</p>
							  </Panel>
						  </Collapse>
					  </blockquote>
				  </Col>
			  </Row>

          </div>

      )
  }


}

export default Home