import React from 'react';
import { autobind } from 'core-decorators';
import { Button, Intent, Slider, Radio, RadioGroup } from '@blueprintjs/core';
import FormInput from '../../../../../../lib/react/components/forms/FormInput';
import Validator from '../../../../../../lib/react/components/forms/validation/Validator';
import NotEmpty from '../../../../../../lib/react/components/forms/validation/functions/NotEmpty';
import HasLength from '../../../../../../lib/react/components/forms/validation/functions/HasLength';
import { errorProps } from './lib';


@autobind
class Form4 extends React.Component {
	state = {
		studentID: this.props.state.studentID,
		PTProficiency: this.props.state.PTProficiency,
		hasSmartphone: this.props.state.hasSmartphone,
		friends: this.props.state.friends,
		nextDisabled: true
	}

	componentDidMount() {
		this._validateFormNext();
	}
	
	onChange({ target }) {
		this.props.onChange(target.id, target.value);
		this.setState({
			[target.id]: target.value
		}, () => {
			// Validate form for next button
			this._validateFormNext();
		});
	}

	validateStudentID(value) {
		if (NotEmpty(value)) {
			return { ok: true };
		}
		else {
			return { ok: false, helperText: 'A student ID is required.' };
		}
	}

	_validateFormNext() {
		if (this._validateForm()) {
			if (this.state.nextDisabled) this.setState({nextDisabled: false});
		}
		else {
			if (!this.state.nextDisabled) this.setState({nextDisabled: true});
		}
	}

	_validateForm() {
		return this.validateStudentID(this.state.studentID).ok;
	}

	onPTChange(e) {
		this.props.onChange('PTProficiency', e.target.value);
		this.setState({PTProficiency: e.target.value});
	}

	onSmarphoneChange(e) {
		this.props.onChange('hasSmartphone', e.target.value);
		this.setState({hasSmartphone: e.target.value});
	}

	render() {
		return (
			<div>
				<div className='pt-callout pt-intent-warning' style={{marginBottom: '0.3rem'}}>
					<h5>Step 4 of 4</h5>
					A few final details to help the planning team sort out the teams and logistics for the day!
				</div>

				<Validator validationFunction={this.validateStudentID} errorProps={errorProps()}>
					<FormInput id='studentID' large value={this.state.studentID} onChange={this.onChange} label='Student ID'/>
				</Validator>

				<RadioGroup onChange={this.onPTChange} selectedValue={this.state.PTProficiency}
					label='How proficient are you at taking PT?'>
					<Radio label='What is PT?' value='0'/>
					<Radio label={'I\'ve taken it before'} value='1'/>
					<Radio label='Fairly comfortable' value='2'/>
					<Radio label='I take it regularly' value='3'/>
					<Radio label='PT is lyfe' value='4'/>
				</RadioGroup>

				<RadioGroup onChange={this.onSmarphoneChange} selectedValue={this.state.hasSmartphone}
					label='Do you have a smartphone with data you can use on the day?'>
					<Radio label='Yes' value='yes'/>
					<Radio label='No' value='no'/>
				</RadioGroup>

				<FormInput id='friends' large value={this.state.friends} onChange={this.onChange} label='Name a friend or two you would like on your team.' sublabel='(no promises)'/>
				
				<Button onClick={this.props.submitForm} className='pt-large' text='Register' disabled={this.state.nextDisabled} intent={Intent.SUCCESS} style={{float:'right'}}/>
				<Button onClick={this.props.back} className='pt-large pt-minimal' text='< Back' intent={Intent.PRIMARY} style={{float:'left'}}/>
			</div>
		);
	}
}


export default Form4;