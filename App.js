import React from "react";
import { ViroARSceneNavigator } from "react-viro";

const sharedProps = require('./APIKey');

const PlaneScene = require('./js/PlaneScene');
const PlaneSelectionScene = require("./js/PlaneSelectionScene");
const ImageMarkerScene = require('./js/ImageMarkerScene');

// Change this to modify which scene is shown by Testbed
const ARScene = ImageMarkerScene;

export default class ARTest extends React.Component {
    render() {
        return (
            <ViroARSceneNavigator
                {...sharedProps}
                initialScene={{ scene: ARScene }}
            />
        );
    }
}

module.exports = ARTest;
