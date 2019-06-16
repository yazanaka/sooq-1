import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { email: 'Ss', password: '123' };
	}

	test() {
		console.warn('clicked', this.state.email, this.state.password);
		// Actions.home();

		return fetch(`http://192.168.0.14:3000/signin?email=${this.state.email}&&password=${this.state.password}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((data) => data.json())
			.then((data) => {
				console.warn(data);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.containerInfo}>
					<Text>email</Text>
					<TextInput
						style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(email) => this.setState({ email })}
						placeholder="EX.email@gmail.com"
					/>
					<Text>password</Text>
					<TextInput
						style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
						onChangeText={(password) => this.setState({ password })}
						placeholder="********"
					/>
					<Text style={{ color: 'blue' }} onPress={() => Actions.signup()}>
						signup
					</Text>
					<Button onPress={this.test.bind(this)} title="login" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerInfo: {
		backgroundColor: '#FDFEE8'
	}
});