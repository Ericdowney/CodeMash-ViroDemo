"use strict";
import React from "react";
import {
    ViroARScene,
    ViroConstants,
    ViroAmbientLight,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroBox,
    ViroText,
    ViroSphere,
    ViroPolygon
} from "react-viro";

ViroARTrackingTargets.createTargets({
    hiroImage: {
        source: require("./res/Hiro.png"),
        orientation: "Up",
        physicalWidth: 0.2 // real world width in meters
    },
    boxImage: {
        source: require("./res/Square.png"),
        orientation: "Up",
        physicalWidth: 0.2
    },
    circleImage: {
        source: require("./res/Circle.png"),
        orientation: "Up",
        physicalWidth: 0.2
    },
    triangleImage: {
        source: require("./res/Triangle.png"),
        orientation: "Up",
        physicalWidth: 0.2
    }
});

export default class ImageMarkerScene extends React.Component {
    constructor() {
        super();

        this.state = {
            text: "Initializing AR..."
        };
        this._onInitialized = this._onInitialized.bind(this);
    }

    render() {
        return [
            <ViroARScene onTrackingUpdated={this._onInitialized}>
                <ViroAmbientLight color={"#aaaaaa"} />
                <ViroARImageMarker target={"hiroImage"}>
                    <ViroText
                        text={"Hiro"}
                        position={[0, 0.2, 0]}
                        scale={[0.2, 0.2, 0.2]}
                    />
                </ViroARImageMarker>
                <ViroARImageMarker target={"boxImage"}>
                    <ViroBox
                        position={[0, 0.2, 0]}
                        scale={[0.2, 0.2, 0.2]}
                        materials={["grid"]}
                    />
                </ViroARImageMarker>
                <ViroARImageMarker target={"circleImage"}>
                    <ViroSphere
                        position={[0, 0.2, 0]}
                        radius={2}
                        heightSegmentCount={20}
                        widthSegmentCount={20}
                        materials={["grid"]}
                    />
                </ViroARImageMarker>
                <ViroARImageMarker target={"triangleImage"}>
                    <ViroPolygon
                        rotation={[-90, 0, 0]}
                        position={[0, 0, 0]}
                        vertices={[[-1, 0], [0, 1], [1, 0]]}
                    />
                </ViroARImageMarker>
            </ViroARScene>
        ];
    }

    _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
            this.setState({
                text: "Tracking Normal"
            });
        } else if (state == ViroConstants.TRACKING_NONE) {
            this.setState({
                text: "Tracking None"
            });
        }
    }
}

module.exports = ImageMarkerScene;
