import React ,{Component} from 'react'
import {
    Form, Icon, Input, Button,
} from 'antd';

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {

        return (
            <Form style={{width:100,height:100}} onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>

                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                </Form.Item>
                <Form.Item>

                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                </Form.Item>
                <Form.Item>




                    <Button style={{width:100}} type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

export default NormalLoginForm