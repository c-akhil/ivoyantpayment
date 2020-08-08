import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import configreducer from '../configreducer';
import configactions from '../configactions';
class ConfigComponet extends React.Component {
    configURL = '';

    componentWillMount() {

    }

    render() {
        console.log(this.configURL, this.props)
        return <React.Fragment>
            <Input placeholder="config url to be loaded" onChange={(event)=>{
                console.log(event.target.value)
                this.props.setConfigURL(event.target.value)
            }} defaultValue={this.props.config.configURL} />
        </React.Fragment>
    }
}

export default connect(configreducer, { ...configactions })(ConfigComponet);