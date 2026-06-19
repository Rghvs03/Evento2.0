import React from 'react';
import SEO from '../components/SEO';
import Hero from "../components/mvpblocks/gradient-hero";
import Features from "../components/mvpblocks/feature-2";
import TestimonialsCarousel from "../components/mvpblocks/testimonials-carousel";
import FAQ from "../components/mvpblocks/faq-3";
import Sparkles from "../components/mvpblocks/sparkles-logo";
import Lightfall from "../components/mvpblocks/Lightfall";
import Particles from "../components/mvpblocks/Particles";

const Home = () => {
    return (
        <div className="relative">
            <div className="fixed inset-0 -z-50">
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <SEO 
                title="Discover & Manage Events"
                description="evento - The ultimate platform to discover, create, and manage events. Connect with organizers, register for events, and stay updated on what's happening around you."
                url="/"
            />
            <Hero />
            <Features />
            {/* <TestimonialsCarousel /> */}
            {/* <FAQ /> */}
            {/* <Sparkles /> */}
        </div>
    );
};

export default Home;
