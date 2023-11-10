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
                value: 160,
                density: {
                    enable: true,
                    value_area: 1500,
                },
            },
            move: {
                direction: 'right',
                enable: true,
                outModes: {
                    default: 'out',
                },
                random: true,
                speed: 0.2,
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
                value: 1,
            },
        },
    };

    return <Particles options={options} init={particlesInit} />;
}
