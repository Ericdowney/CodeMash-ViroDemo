"use strict";
import React from "react";
import {
    ViroARScene,
    ViroConstants,
    ViroAmbientLight,
    ViroBox,
    ViroARPlane
} from "react-viro";

export default class PlaneScene extends React.Component {
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
                <ViroARPlane
                    minHeight={0.5}
                    minWidth={0.5}
                    alignment={"Horizontal"}
                >
                    <ViroBox
                        position={[0, 0.25, 0]}
                        scale={[0.5, 0.5, 0.5]}
                        materials={["grid"]}
                    />
                </ViroARPlane>
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

module.exports = PlaneScene;
