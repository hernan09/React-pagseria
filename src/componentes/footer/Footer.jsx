import React,{Component} from 'react'
import { Row, Col } from 'antd';
import {
	Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './footer.css'
class Footer extends Component{
	constructor(){
		super();
		this.state={
			form:false
		}

		this.aparecerForm=this.aparecerForm.bind(this)
	}
	aparecerForm(){
    this.setState({
			form:!this.state.form
		})
	}

  render(){
      return(
          <div id="footer" style={{color:"white"}} className="footer is-primary">
					<Row>
						<Col span={24}><div style={{ width: "90%", height: "100%" }}><h4>	<div id="iconos">

							<a className="icon" href="#" id="fac"> <span className="icon-facebook"></span>facebook</a>
                 <br/>

							<a className="icon" href="#" id="ins"><span className="icon-twitter"></span>TwitterLin</a>
                 <br/>

							<a className="icon" href="#about" id="twi"><span className="icon-instagram"></span>Instagram</a>

						</div></h4></div>




						</Col>

					</Row>




          </div>
      )
  }

}

export default Footer