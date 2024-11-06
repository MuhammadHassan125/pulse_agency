import React from 'react'
import HeroSection from '@/components/landing_page_components/branding_page_components/HeroSection';
import PortfolioSection from '@/components/landing_page_components/branding_page_components/PortofolioSection';
import BrandingSection from '@/components/landing_page_components/branding_page_components/BrandingSection';
import DesignServicesSection from '@/components/landing_page_components/branding_page_components/DesignServicesSection';
import Testimonials from '@/components/landing_page_components/app_page_components/Testimonials';
import FaqSection from '@/components/landing_page_components/app_page_components/FaqSection';
import OurBlog from '@/components/landing_page_components/app_page_components/OurBlog';
import Footer from '@/components/layout/Footer';

const Branding = () => {
  return (
    <React.Fragment>
        <main className="theme_bg_color">
            <HeroSection/>
            <PortfolioSection/>
            <BrandingSection/>
            <DesignServicesSection/>
            <Testimonials/>
            <FaqSection/>
            <OurBlog/>
            <Footer/>
        </main>
    </React.Fragment>
  )
}

export default Branding