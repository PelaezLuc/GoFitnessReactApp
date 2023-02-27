import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "../config/particle-config";

export const ParticlesBackground = () => {
    return (
        <Particles params={ParticleConfig}></Particles>
    );

}