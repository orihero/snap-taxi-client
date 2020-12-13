import React from 'react'
import {View, TouchableWithoutFeedback} from "react-native"
import styles from "./styles";
import {Bold} from "../Layout/AppText";
import {Fade, Placeholder, PlaceholderLine} from "rn-placeholder";

export const SelectedDestination = ({containerStyle, to, from, disabled, selectDestination}) => (
    <View style={[styles.container, containerStyle]}>
        <TouchableWithoutFeedback onPress={selectDestination} disabled={disabled}>
            <View style={{marginLeft: 5, flex: 1}}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.addressCircle]}>
                        </View>
                        {
                            from
                                ? <Bold style={styles.directionText}>{from}</Bold>
                                : <Placeholder
                                    Animation={Fade}
                                    style={{width: 200, height: 12}}
                                >
                                    <PlaceholderLine/>
                                </Placeholder>
                        }
                    </View>
                </View>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.addressCircle, styles.redColor]}>
                        </View>
                        <Bold style={styles.directionText}>{to}</Bold>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
);


export default SelectedDestination;
