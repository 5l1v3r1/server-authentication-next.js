import React, {Component} from 'react'
import Head from 'next/head'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Logo from '../utils/SignLogo'
import Form from './Form'

class Main extends Component {
  componentWillUpdate (nextProps) {
    if (nextProps.signReducer.token) {
      document.location.pathname = '/profile'
    }
  }

  render () {
    return (
      <div>
        <Head>
          <title>Sign In</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Head>
        <div style={{ marginTop: '200px' }}>
          <Col lg={4} lgOffset={2} style={{ borderRight: '2px solid #ccc', height: '350px' }}>
            <Logo />
          </Col>
          <Col lg={4}>
            <Form />
          </Col>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ signReducer }) => {
  return {
    signReducer
  }
}

export default connect(mapStateToProps)(Main)
