import React,{Component} from 'react'
import { Row, Col } from 'antd';
import {
	Form, Icon, Input, Button, Checkbox,
} from 'antd';

import './footer.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';




function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

function LinkTab(props) {
	return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
	root: {
		flexGrow: 2,
		backgroundColor: "black",
		color:"white"
	},
});

class NavTabs extends React.Component {
	constructor(){
		super()
		this.state = {
			value: 0,
			user: "",
			pass: "",
			resPost: {}
		};
		this.cambioFormUser = this.cambioFormUser.bind(this)
		this.cambioFormPass = this.cambioFormPass.bind(this)
		this.enviarForm = this.enviarForm.bind(this)
	}


	enviarForm(e) {
		e.preventDefault()

		let obj = {}
		obj.user = this.state.user
		obj.pass = this.state.pass

      fetch('http://localhost:4000/usuarios', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ obj })
		}).then(res => {
			console.log(res)
			this.setState({
				resPost: res
			})
		})



	}

	cambioFormUser(e) {
		this.setState({
			user: e.target.value,

		})

	}
	cambioFormPass(e) {
		this.setState({
			pass: e.target.value,

		})

	}
	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<NoSsr>
				<div className={classes.root}>
					<AppBar  position="static">
						<Tabs style={{ backgroundColor:"#FF851B",color:"white"}} variant="fullWidth" value={value} onChange={this.handleChange}>
							<LinkTab label="Contact" href="page1"/>
							<LinkTab label="Login" href="page2"/>
							<LinkTab label="More" href="page3"/>
						</Tabs>
					</AppBar>
					{value === 0 && <TabContainer>

						 <div id="footer" style={{ color:"white"}} className="footer is-primary">
						 <Row>

							  <Col span={24}><div style={{ width: "90%" }}><h4><div id="iconos">

							 	 	<a className="icon" href="#" id="fac"> <span className="icon-facebook"></span>facebook</a>
								<br />

									<a className="icon" href="#" id="ins"><span className="icon-twitter"></span>TwitterLin</a>
								<br />

									<a className="icon" href="#about" id="twi"><span className="icon-instagram"></span>Instagram</a>

								</div>

								</h4>

								</div>




							  </Col>

						   </Row>
             </div>
					</TabContainer>}
					{value === 1 && <TabContainer><blockquote style={{height:180}} className="blockquote text-center">
                     <Row>
                     <Col span={24}>
						    <hr/>
								<form id="formabout" onSubmit={this.enviarForm}>

									<input type="text" className="form-control" name="user" value={this.state.user} onChange={this.cambioFormUser} placeholder="ingrese su user"/>
                      <br></br>


									<input type="passsword" className="form-control" name="pasword" value={this.state.pass} onChange={this.cambioFormPass} placeholder="ingrese su password"/>
                    <br/>
									<input style={{width:"30%",margin:"auto"}} type="submit" value="enviar" className="btn btn-warning " />

								</form>

						 </Col>

					 </Row>

					</blockquote></TabContainer>}
					{value === 2 && <TabContainer>
						<blockquote id="fottres" style={{ color: "white",height:180}} className="blockquote text-center">
							<h2 style={{ color: "white" }}><strong style={{color:"orange"}}>W</strong>arbringer</h2>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
							<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

							<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
							<footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
						</blockquote>
					</TabContainer>}
				</div>
			</NoSsr>
		);
	}
}

NavTabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);





