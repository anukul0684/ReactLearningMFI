import React, {Component} from 'react';

class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            feedback: '',
            acceptedTerms: false,
            validateErrors: {},
            submitted: 0
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.validateFields = this.validateFields.bind(this);
    }
    handleOnChange(e) {
        const target = e.target;
        const name = target.name;
        const value = (
            target.type === 'text' ? target.value : target.checked
        );
        this.setState({
            [name]: value
        });
    }

    handleOnSubmit(e) {
        e.preventDefault();
        if(this.validateFields()) {
            this.setState((state) => {
                return {
                    submitted: state.submitted + 1
                }
            });
        }
    }

    validateFields() {
        const {
            firstName,
            lastName,
            feedback,
            acceptedTerms
        } = this.state;

        const errors = {

        };

        if(!firstName) {
            errors['firstName'] = 'First name cannot be empty';
        }

        if(!lastName) {
            errors['lastName'] = 'Last name cannot be empty';
        }

        if(!feedback) {
            errors['feedback'] = 'Feedback cannot be empty';
        }

        if(!acceptedTerms) {
            errors['acceptedTerms'] = 'Please accept Terms';
        }

        this.setState({
            validateErrors: errors,
        });

        return Object.keys(errors).length === 0;

    }

    render() {
        const {
            firstName: firstNameError,
            lastName: lastNameError,
            feedback: feedbackError,
            acceptedTerms: acceptedTermsError
        } = this.state.validateErrors;
        return(
            <React.Fragment>
                <section>
                    <h3>Form Submit Events:</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <label>
                            <span class="error">{firstNameError}</span>
                            <input type="text" name="firstName" placeholder="First Name" 
                            value={this.state.firstName} onChange={this.handleOnChange} />
                        </label>
                        <label>
                        <span class="error">{lastNameError}</span>
                            <input type="text" name="lastName" placeholder="Last Name" 
                            value={this.state.lastName} onChange={this.handleOnChange} />
                        </label>
                        <label>
                        <span class="error">{feedbackError}</span>
                            <input type="text" name="feedback" placeholder="Feedback" 
                            value={this.state.feedback} onChange={this.handleOnChange} />
                        </label>
                        <label>
                            <input type="checkbox" name="acceptedTerms" checked={this.state.acceptedTerms} 
                            onChange={this.handleOnChange} /> I accept my terms 
                            <span class="error">{acceptedTermsError}</span>
                        </label>
                        <button type="submit">
                            Submit
                        </button>
                        Submitted {this.state.submitted} times!
                    </form>
                </section>
            </React.Fragment>
        )
    }
}

export default FormValidation;