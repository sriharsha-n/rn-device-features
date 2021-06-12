import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import {Ionicons } from '@expo/vector-icons'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color='white' />
    )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
