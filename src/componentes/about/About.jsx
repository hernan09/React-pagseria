import React ,{Component} from 'react'
import { Row, Col } from 'antd';

import { Collapse } from 'antd';
import './about.css'






const Panel = Collapse.Panel;





class About extends Component{
	constructor(props){
		super(props)
		this.state={
			tabla:false,
			visor:true,
			user:"",
			pass:"",
			pelis:[],
			loading:false,
			url2:[],
			peli1:"",
			resPost:{},
			page:1
		}

		this.handleClick=this.handleClick.bind(this)
		this.paginar=this.paginar.bind(this)

	}
	handleClick(){
   this.setState({
		 tabla:!this.state.tabla,
		 visor: !this.state.visor


	 })
	}
	componentDidMount(){
		this.setState({
			data:[],
			loading:true
		})
		fetch(`http://localhost:4000/pelis?page=${this.state.page}&limit=6`).then(resp => resp.json()).then(pelis => {
			this.setState({

				pelis: pelis.pelis,
				loading:false
			})
			console.log(pelis)

		})
		 }


     paginar(){
      this.setState({
				page:this.state.page+1
			})
			console.log(this.state.page)
	   }

	handle(peli2){


		fetch(`http://localhost:4000/pelis/${peli2._id}`,{method:"GET"}).then(res=>{
			console.log(peli2._id)

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

    render(){




    let pelis2=this.state.pelis.map((peli2,i)=>{
        if(this.state.loading){
					return(
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)
				}else{
					return (



							<tr key={i} id="tabla" className="table-default">

								<td><span className="badge badge-pill badge-warning">{peli2.name}</span></td>
								<td><img style={{ width: 100, height: 100 }} src={peli2.img} alt=""></img></td>
								<td><a href="#top" className="btn btn-info" onClick={() => this.handle(peli2)}>View</a></td>
								<td><a href="#top" className="btn btn-danger" onClick={() => this.handleDelete(peli2)}>Delete</a></td>
							</tr>




					)
				}






		})

		let pelis=this.state.pelis.map((peli,i)=>{
			return(


        <img key={i} src={peli.img} style={{width:"50%"}} alt="no se encuentra la imagen"/>



			)
		})

            return(
					<div id="about">

						<Row>
							<Col span={24}>

								<blockquote id="titulo" className="blockquote text-center" style={{marginTop:100,color:"white"}}>
									<h1 id="h1bout" style={{ color: "white" }}><strong style={{color:"orange"}}>W</strong>elcome</h1>

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


											<Collapse id="collapse" accordion defaultActiveKey={['2']} style={{width:"50%",margin:"auto",backgroundColor:"black",colorheader:"white"}}>

												<Panel header={<div><a id="li2" href="#top"><h1 id="h1panel2" style={{ color: "white" }}><strong style={{ color: "orange" }}>V</strong>ideos</h1></a></div>} key="2">
												<button className="btn btn-success" onClick={this.paginar}>Siguiente</button>
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
								<blockquote className="blockquote text-center" style={{color:"white",height:300,marginBottom:300}}>
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26245.382601953457!2d-58.38426796392878!3d-34.688206010168344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccd2a95284c3%3A0xc40db4ad11bd87eb!2sGerli%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1553025901219" width="400" height="300" ></iframe>

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