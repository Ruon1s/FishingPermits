import * as React from 'react';
import {View, Text, Button} from 'react-native'
import {Header, Overlay} from "react-native-elements";
import { Icon } from 'react-native-elements'
import {FontAwesome5} from "@expo/vector-icons";
import {toggleHidden} from "../store/overlay/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {RootState} from "../store";

interface Props {
    title: string;
    onPress: (args?: any) => void;
};


const TopBar: React.FC<Props> = ({title, onPress}) => {

   useEffect(() => {
       const state = useSelector((state: RootState) => state.hidden);
   }, []);
    const dispatch = useDispatch()

    const doStuff = () => {
        dispatch(toggleHidden())
    };

    if (title === 'Kalastusluvat') {
        return (
            <Header
                backgroundColor={'tomato'}
                placement={"center"}
                centerComponent={{text: title, style: {color: '#fff'}}}
                rightComponent={<Icon name='plus-square' type='font-awesome-5' color={'#fff'} onPress={onPress}/>}
            >
            </Header>
);
};
};
