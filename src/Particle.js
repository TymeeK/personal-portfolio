import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function Particle() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const options = {
        particles: {
            number: {
                value: 100,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'out',
                },
                random: true,
                speed: 0.1,
                straight: false,
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                },
                value: { min: 0, max: 1 },
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
    };

    return <Particles options={options} init={particlesInit} />;
}
