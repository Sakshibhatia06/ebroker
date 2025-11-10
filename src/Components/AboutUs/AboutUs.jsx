"use client"
import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton";
import { translate } from "@/utils/helper";
import { languageData } from "@/store/reducer/languageSlice";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import Layout from '../Layout/Layout';

const AboutUs = () => {

  const lang = useSelector(languageData);
  useEffect(() => { }, [lang]);

  // ✅ Backend data ignored (not needed)
  // const AboutUsRedux = useSelector(settingsData);
  // const AboutUsData = AboutUsRedux?.about_us;

  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // ✅ Hard-coded About Us content only
      const simulatedData = `
      <h2>About Us</h2>
      <p>Welcome to our company — a dedicated technology firm based in India, committed to building modern, reliable, and intelligent digital solutions for businesses across the country.</p>

      <h3>Who We Are</h3>
      <p>We are a passionate team of developers, designers, and technology professionals focused on solving real-world business challenges with innovative software solutions. Our goal is to empower businesses with smart digital tools to grow, scale, and succeed.</p>

      <h3>Our Vision</h3>
      <p>To simplify and modernize the way businesses operate by delivering cutting-edge solutions that enhance productivity, efficiency, and customer experience.</p>

      <h3>What We Do</h3>
      <p>From mobile apps and web platforms to automation systems and business management tools, we build technology that bridges the gap between business processes and digital innovation.</p>

      <h3>What Sets Us Apart</h3>
      <ul>
        <li><strong>Innovation:</strong> We adopt the latest technologies to create scalable and future-ready products.</li>
        <li><strong>User-Centric Approach:</strong> Our design philosophy ensures clean UI and smooth UX.</li>
        <li><strong>Dedicated Support:</strong> We are always here to assist you and ensure seamless usage of our solutions.</li>
      </ul>

      <h3>Contact Us</h3>
      <p>For questions, support, or business inquiries, feel free to connect with us. We are available from <strong>9 AM to 6 PM IST</strong>, Monday to Saturday.</p>

      <h3>Join Us</h3>
      <p>Be a part of the digital future. Together, let's build smarter businesses and a smarter tomorrow.</p>
      `;

      // ✅ Always use only this content
      setAboutData(simulatedData);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <Layout>
      <Breadcrumb title={translate("aboutUs")} />
      <section id="termsSect">
        <div className="container">
          <div className="card">
            {isLoading ? (
              <div className="col-12 loading_data">
                <Skeleton height={20} count={20} />
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: aboutData || "" }} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
