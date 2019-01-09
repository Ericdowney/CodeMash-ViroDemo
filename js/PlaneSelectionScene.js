"use strict";
import React from "react";
import {
    ViroARScene,
    ViroBox,
    ViroConstants,
    ViroMaterials,
    ViroAmbientLight,
    ViroARPlaneSelector
} from "react-viro";

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require("./res/grid_bg.jpg")
    }
});

export default class PlaneSelectionScene extends React.Component {
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
                <ViroARPlaneSelector>
                    <ViroBox
                        position={[0, -0.5, -1]}
                        scale={[0.3, 0.3, 0.3]}
                        materials={["grid"]}
                    />
                </ViroARPlaneSelector>
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

module.exports = PlaneSelectionScene;