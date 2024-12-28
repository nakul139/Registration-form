import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    isSubmit: false,
    firstName: '',
    lastName: '',
    firstnameBlur: false,
    lastnameBlur: false,
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value, firstnameBlur: false})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value, lastnameBlur: false})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstnameBlur: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastnameBlur: true})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstnameBlur: true})
    }
    if (lastName === '') {
      this.setState({lastnameBlur: true})
    } else {
      this.setState({isSubmit: true})
    }
  }

  submitAnother = () => {
    this.setState({isSubmit: false, firstName: '', lastName: ''})
  }

  render() {
    const {isSubmit, firstName, lastName, firstnameBlur, lastnameBlur} =
      this.state
    return (
      <div>
        <div className="registration-form">
          <h1 className="registration-heading">Registration</h1>
          {isSubmit ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="success">Submitted Successfully</p>
              <button
                className="return-login"
                type="button"
                onClick={this.submitAnother}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.submitForm} className="form-container">
              <label htmlFor="firstName" className="label-input">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                value={firstName}
                className="first-name"
                onBlur={this.onBlurFirstName}
                onChange={this.changeFirstName}
              />
              {firstnameBlur && <p className="error-message">Required</p>}
              <label htmlFor="lastName" className="label-input">
                LAST NAME
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                value={lastName}
                className="last-name"
                onBlur={this.onBlurLastName}
                onChange={this.changeLastName}
              />
              {lastnameBlur && <p className="error-msg">Required</p>}
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
