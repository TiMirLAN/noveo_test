import React from 'react'
import PropTypes from 'prop-types'
import Toast from 'react-bootstrap/Toast'

const ErrorToast = ({ header, text, clearError }) => (
  <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
    {header && text && (
      <Toast onClose={clearError}>
        <Toast.Header>
          <strong>{header}</strong>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    )}
  </div>
)

ErrorToast.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  clearError: PropTypes.func.isRequired
}

export default ErrorToast
