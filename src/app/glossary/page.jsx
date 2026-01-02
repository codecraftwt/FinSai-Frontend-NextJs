import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import GlossaryNav from '../../components/LearnGrow/GlossaryNav';
import assets from '../../assets/assets';

const Glossary = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0D0D0E] text-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
            </div>

            <Header isScrolled={isScrolled} />

            <Banner
                heading="Glossary"
                description="Choose to learn the realistic way"
                backgroundImage={assets.learngrow}
                showButton={false}
            />

            <GlossaryNav />

            <Footer />
        </div>
    );
};

export default Glossary;

