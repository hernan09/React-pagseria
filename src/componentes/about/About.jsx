import React ,{Component} from 'react'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Collapse } from 'antd';
import { Spin } from 'antd';
import {
	Form, Icon, Input, Button
} from 'antd';


import './about.css'




const Panel = Collapse.Panel;





class About extends Component{
	constructor(){
		super()
		this.state={
			tabla:false,
			visor:true,
			user:"",
			pass:"",
			pelis:[],
			loading:false,
			url2:[],
			peli1:""
		}

		this.handleClick=this.handleClick.bind(this)
		this.cambioForm=this.cambioForm.bind(this)
		this.enviarForm = this.enviarForm.bind(this)
	}
	handleClick(){
   this.setState({
		 tabla:!this.state.tabla,
		 visor: !this.state.visor


	 })
	}
	componentDidMount(){
		fetch('http://localhost:4000/pelis').then(resp => resp.json()).then(pelis => {
			this.setState({

				pelis: pelis.pelis,
			})

		})
   	}


	handle(peli2){
    fetch(`http://localhost:4000/pelis/:${peli2._id}`,{method:"GET"}).then(res=>{

			this.setState({
        loading: true,
				url2: peli2.url,
				visor: !this.state.visor,
			})

			setTimeout(() => {
				this.setState({
					loading: false,
					tabla: !this.state.tabla

				})
			}, 2000);



		})



	}
	handleDelete(peli2){
		fetch(`http://localhost:4000/delete/:${peli2}`,{method:"delete"}).then(res=>{
			let newPelis = this.state.pelis.filter((i) => {
				return i !== peli2
			})
			this.setState({
				pelis: newPelis
			})
			localStorage.setItem("pelis", JSON.stringify(this.state.pelis))
		})






	}
	enviarForm(e){


   fetch(`http://localhost:4000/usuarios`,{method:"POST"}).then(res=>{
			let obj = {}
			obj.user = this.state.user
			obj.pass = this.state.pass
			console.warn("data", obj)
     })
  }

	cambioForm(e,type){
   switch (type) {
		 case "user":{
			 this.setState({
				 user:e.target.value
			 })
		 }case"password":{
			 this.setState({
				 pass:e.target.value
			 })
		 }


	 }

	}
    render(){




    let pelis2=this.state.pelis.map((peli2,i)=>{

				 return (


					 <tr key={i} id="tabla" className="table-default">

						 <td><span className="badge badge-pill badge-warning">{peli2.name}</span></td>
						 <td><img style={{ width: 100, height: 100 }} src={peli2.img} alt=""></img></td>
						 <td><a href="#top" className="btn btn-info" onClick={() => this.handle(peli2)}>View</a></td>
						 <td><a href="#top" className="btn btn-danger" onClick={() => this.handleDelete(peli2)}>Delete</a></td>
					 </tr>

				 )





		})

		let pelis=this.state.pelis.map((peli,i)=>{
			return(


        <img key={i} src={peli.img} style={{width:"50%"}} alt=""/>



			)
		})

            return(
					<div id="about">

						<Row>
							<Col span={24}>
								<blockquote className="blockquote text-center" style={{marginTop:100,color:"white"}}>
									<h1 id="h1bout" style={{ color: "white" }}><strong style={{color:"orange"}}>H</strong>ark</h1>

									<p>The following is <strong>rendered as bold text</strong></p>


								</blockquote>
							</Col>

						</Row>



						<Row>
							<Col span={24} >
								{ this.state.tabla &&< blockquote className="blockquote text-center" style={{color:"white"}}>
									<p >This line of text is meant to be treated as fine print.</p>
									<p ><small>This line of text is meant to be treated as fine print.</small></p>
									 <a href="#top" style={{width:"20%",margin:"auto"}} onClick={this.handleClick} className="btn btn-warning  btn-block">More</a>

								</blockquote>}

							</Col>


						</Row>

						<Row>

							<Col span={24}>
							{this.state.visor && <blockquote id="tabla" className="blockquote text-center">

											<Collapse id="collapse" accordion defaultActiveKey={['1']} style={{width:"50%",margin:"auto",backgroundColor:"black",colorheader:"white"}}>
												<Panel id="panel" header={<div><a id="li1" href="#top"><h1 id="h1panel" style={{ color: "white" }}><strong style={{
													color: "orange"
												}}>C</strong>arrousel</h1></a></div>} key="1" style={{color:"black"}}>
												<div>
														<Carousel id="carro" autoplay effect="fade">
															{pelis}
														</Carousel>

												</div>

												</Panel>
												<Panel header={<div><a id="li2" href="#top"><h1 id="h1panel2" style={{ color: "white" }}><strong style={{ color: "orange" }}>V</strong>ideos</h1></a></div>} key="2">
												<table className="table table-hover">
													<thead>
														<tr>
															<th scope="col">Name</th>
															<th scope="col">Imagen</th>
															<th scope="col">View</th>
																<th scope="col">Delete</th>
														</tr>
													</thead>
														<tbody>
                              {pelis2}

														</tbody>
												</table>
												</Panel>
												<Panel header={<div><a id="li3" href="#top"><h1 id="h1panel3" style={{ color: "white" }}><strong style={{ color: "orange" }}>L</strong>ogin</h1></a></div>} key="3">
													<blockquote className="blockquote text-center">
														<Form id="formabout"  style={{width:"50%",margin:"auto"}} className="login-form">
															<Form.Item>

																	<Input prefix={<Icon type="user"  style={{ color: 'rgba(0,0,0,.25)' }} />} type="user" onChange={(e)=>this.cambioForm(e,"user")} placeholder="Username" />

															</Form.Item>
															<Form.Item>

																<Input prefix={<Icon type="lock"  style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={(e)=>this.cambioForm(e,"password")} type="password" placeholder="Password" />

															</Form.Item>
															<Form.Item>



																<a className="login-form-forgot" href="#top">Forgot password</a><br></br>
																<Button type="primary" htmlType="submit" onClick={()=>this.enviarForm()} className="login-form-button">
																	Log in
                                </Button>
																Or <a href="#top">register now!</a>
															</Form.Item>
														</Form>
													</blockquote>
												</Panel>
											</Collapse>


										</blockquote> }

										<div style={{ width: 90, margin: "auto",height:100 }}>
											{this.state.loading && <div className="text-center">
												<div className="spinner-border text-warning" role="status">
													<span className="sr-only">Loading...</span>
												</div>
											</div>}

										</div>

										{this.state.tabla && <blockquote id="iframe2" className="blockquote text-center" style={{ color: "white", height: 500, width: "100%" }}>

											<iframe src={this.state.url2} style={{ width: "60%", height: "50%" }}  allowFullScreen title="iframe"></iframe>

										</blockquote>}











							</Col>


						</Row>
						<Row>
							<Col span={24}>
								<blockquote className="blockquote text-center" style={{color:"white",height:400}}>
									<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>
							</Col>


						</Row>

						<Row>
							<Col span={24}>
								<blockquote className="blockquote text-center" style={{color:"white"}}>
									<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>

							</Col>


						</Row>
					</div>

        )
    }
}

export default About