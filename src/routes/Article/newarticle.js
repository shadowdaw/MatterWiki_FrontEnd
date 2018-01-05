import React, { Component } from 'react';
import { connect } from 'dva'; 
import styles from './article.less';
import Loading from '../../components/Loading';
import { Link } from 'dva/router';
import { Form, Input,  Button, Icon,Select} from 'antd'; 

const FormItem = Form.Item; 
const Option = Select.Option; 

/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
  CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 600;
CKEDITOR.config.width = 'auto';




@connect(state => ({
    article: state.article,
    index: state.index,
    }))
@Form.create()
export default class Article extends Component {
        state = {
            mounted: false,
            content:''
        }
        componentWillMount() { 
          this.props.dispatch({
              type: 'index/getTopicList',
              payload: {},
          });
        }
        componentDidMount() {
         function isWysiwygareaAvailable() { 
          if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
            return true;
          }

          return !!CKEDITOR.plugins.get( 'wysiwygarea' );
          } 
          var wysiwygareaAvailable = isWysiwygareaAvailable(),
            isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' ); 
          var editorElement = CKEDITOR.document.getById( 'editor' ); 
          if ( isBBCodeBuiltIn ) {
            editorElement.setHtml(
              'Hello world!\n\n' +
              'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
            );
          }
          if ( wysiwygareaAvailable ) {
            CKEDITOR.replace( 'editor' );
          } else {
            editorElement.setAttribute( 'contenteditable', 'true' );
            CKEDITOR.inline( 'editor' );
          }  
            const editor = CKEDITOR.instances.editor;
            editor.on('change', e => {
              this.setState({content:e.editor.getData()})
            }); 
        }
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields({
                force: true
            },
                (err, values) => { 
                    if (!err) {  
                        const payload={...values,body:this.state.content,user_id:window.localStorage.getItem("userId")};
                        this.props.dispatch({
                            type: 'article/saveArticle',
                            payload: payload,
                        });
                    }
                }
            );
        }
        render() {   
                const {form, article,index} = this.props;   
                const {detail,loading}=article; 
                const {topicList,topicloading}=index
                const {getFieldDecorator} = form;
                    return <div  className={styles.mainarea}> 
                          <Form  onSubmit={this.handleSubmit}> 
                              <FormItem>
                                {getFieldDecorator('title', {
                                    initialValue:detail.title || '',
                                    rules: [{
                                        required: true,
                                        message: '请输入标题',
                                    }],
                                })(
                                    <Input
                                    size="large"
                                    addonBefore={<Icon type="info-circle-o" className={styles.prefixIcon} />}
                                    placeholder="输入标题" 
                                    />
                                )}
                              </FormItem>
                              <FormItem>
                                <textarea name="editor" id="editor" rows="40" cols="40" value={detail.body}> 
                                </textarea>
                              </FormItem>
                              <FormItem>
                                {getFieldDecorator('topic_id', {
                                    initialValue:topicList.length?`${topicList[0].id}`:'',
                                    rules: [{
                                        required: true,
                                        message: '请选择分类',
                                    }],
                                })(
                                    <Select>
                                      {topicList.map(topic => (
                                        <Option key={topic.id}>{topic.name}</Option>
                                      ))}
                                    </Select>
                                )}
                              </FormItem> 
                              <FormItem className={styles.additional}> 
                                  <Button size="large" className={styles.submit} type="primary" htmlType="submit">
                                    创建
                                  </Button>
                              </FormItem>
                          </Form>
                          </div>; 
        }
    }