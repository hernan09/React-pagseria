import React ,{Component} from 'react'

import './navigation.css'






class Navigation extends Component{
   constructor(){
       super()
       this.state={
				mostrar:false,
				user:"",
				pass:"",
				respPost:{},

			 }
			 this.aparecer=this.aparecer.bind(this)
			 this.cambiarUser=this.cambiarUser.bind(this)
			 this.cambiarPass = this.cambiarPass.bind(this)
			 this.enviar=this.enviar.bind(this)


			}



aparecer(){
	this.setState({
		mostrar:!this.state.mostrar
	})
}
cambiarUser(e){
 this.setState({
	 user:e.target.value
 })

}

cambiarPass(e) {
 this.setState({
	 pass:e.target.value
 })
}

enviar(e){

		e.preventDefault()

		let obj = {}

		obj.user = this.state.user

		obj.pass = this.state.pass
		fetch(`http://localhost:4000/usuarios`, {
			method: "POST", headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}, body: JSON.stringify({ obj })
		}).then(res => {

			this.setState({
				respPost: res
			})

			console.log(this.state.respPost)
		})

}


   render(){


         return(
		 <div id="body">

							 <div className="contenedor">
								 <div className="palanca">
									 <span id="crear"onClick={this.aparecer}>Crear Cuenta</span>
								 </div>
								 <div className="formulario">
									 <h2>Iniciar sesion</h2>
									 <form onSubmit={this.enviar}>
									 <input type="text" className="form-control" value={this.state.user} name="user" onChange={this.cambiarUser} placeholder="Usuario" ></input>

									 <input type="password" className="form-control" value={this.state.pass} name="pass" onChange={this.cambiarPass} placeholder="Contraseña" ></input>

										 <input type="submit" className="btn btn-warning" value="Login"></input>
									 </form>
								 </div>
								 {this.state.mostrar && < div className="formulario2">
									 <h2>Crear Cuenta</h2>
									 <form >
									 <input type="text" className="form-control" placeholder="Usuario" ></input>
									 <input type="password" className="form-control" placeholder="Contraseña" ></input>
									 <input type="email" className="form-control" placeholder="Correo Electronico" ></input>
									 <input type="text" className="form-control" placeholder="Telefono"></input>
										 <input type="submit" className="btn btn-warning" value="Registrarse"></input>
									 </form>
								 </div>}
								 <div className="reset-password">
									 <a href="#top">Olvido su contraseña?</a>
								 </div>
							 </div>



		 </div>


		 )

}
}

export default Navigation