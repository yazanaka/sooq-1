import { Router, Scene } from 'react-native-router-flux';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
// import console = require('console');

export default function Footer() {
	homePage = () => {
		Actions.home();
	};
	addItem = () => {
		Actions.additem();
	};
	return (
		<View>
			<View style={{ backgroundColor: '#1F2833', height: 50 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
						<Icon name="md-home" size={50} color="#FFFFFF" onPress={this.homePage} />
					</View>

					<View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
						<MaterialCommunityIcons onPress={() => Actions.shop()} name="store" size={50} color="white" />
					</View>

					<View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
						<Icon name="md-text" size={50} color="#FFFFFF" />
					</View>
				</View>
			</View>
		</View>
	);
}
