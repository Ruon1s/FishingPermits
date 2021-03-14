import React from 'react';
import {View, Text, Button} from 'react-native'
import {Header, Overlay, Input} from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {FontAwesome5} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../store";


interface Props {
    title: string;
}

const TopBar: React.FunctionComponent<Props> = ({title}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        if(!visible){
            setVisible(!visible)
        }else{
            setVisible(!visible)
        }
    }

    if (title === 'Kalastusluvat') {
        return (
            <View>
            <Header
                backgroundColor={'tomato'}
                centerComponent={{text: title, style: {color: '#fff', fontSize: 20, marginTop: 10}}}
                rightComponent={<Icon name='plus-square' type='font-awesome-5' color={'#fff'} onPress={toggleOverlay} size={40}/>}
            >
            </Header>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{elevation: 10, padding: 25, width: '80%', height: '80%'}}>
                <Text>Hello</Text>
                <Input placeholder='Name of permit'></Input>
            </Overlay>
            </View>
        )
    }else{
        return (
            <Header
                backgroundColor={'tomato'}
                placement={"center"}
                centerComponent={{text: title, style: {color: '#fff', fontSize: 20, marginTop: 10}}}
            >
            </Header>
        )
    }

};
export default TopBar
