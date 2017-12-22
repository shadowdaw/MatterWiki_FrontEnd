import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Login.less';
import { Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert } from 'antd'; 

const FormItem = Form.Item; 

@connect(state => ({
    login: state.login,
    }))
@Form.create()
export default class Login extends Component {
        state = {
            count: 0,
            type: 'account',
        } 

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields({
                force: true
            },
                (err, values) => { 
                    if (!err) {
                        this.props.dispatch({
                            type: 'login/login',
                            payload: {
                                ...values,
                                type: this.state.type,
                            },
                        });
                    }
                }
            );
        }
 

        render() {
            const {form, login} = this.props;
            const {getFieldDecorator} = form;
            const {count, type} = this.state; 
            return <div className={styles.main}>
                    <Form onSubmit={this.handleSubmit}>  
                          <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true,
                                    message: '请输入账户名！',
                                }],
                            })(
                                <Input
                                size="large"
                                prefix={<Icon type="user" className={styles.prefixIcon} />}
                                placeholder="输入邮箱"
                                />
                            )}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '请输入密码！',
                                }],
                            })(
                                <Input
                                size="large"
                                prefix={<Icon type="lock" className={styles.prefixIcon} />}
                                type="password"
                                placeholder="输入密码"
                                />
                            )}
                          </FormItem> 
                      <FormItem className={styles.additional}>
                        {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
                            )} 
                        <Button size="large" loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
                          登录
                        </Button>
                      </FormItem>
                    </Form> 
                  </div>
        }
    }
