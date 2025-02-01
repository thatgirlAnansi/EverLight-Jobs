
import React from 'react';
import aboutImage from '../Assets/EHS.png'; // Ensure correct image path

const AboutCompany = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f9fafb, #e5e7eb)',
        padding: '5rem 1.5rem',
      }}
    >
      {/* Top Section - About Our Company */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto 3rem auto', // Add margin at the bottom
          textAlign: 'center', // Center align the text
        }}
      >
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: '#005b66',
            marginBottom: '1.5rem',
          }}
        >
          About Our Company
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75',
            marginBottom: '1.5rem',
          }}
        >
          At <span style={{ fontWeight: '600', color: '#00414d' }}>EverLight</span> we’re redefining what it means to deliver health solutions. 
          As a subsidiary of The Cigna Group, we are committed to making healthcare more affordable, predictable, and simple for everyone. Through innovative pharmacy benefits management, specialty pharmacy services, care delivery, and advanced health analytics, we empower individuals and organizations to take control of their health.
        </p>
        {/* <p
          style={{
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75',
            marginBottom: '1.5rem',
          }}
        >
          Our team of dedicated professionals works on the latest technologies to drive
          digital transformation. We believe in fostering a collaborative and inclusive
          workplace that empowers employees to excel.
        </p> */}
        {/* <p
          style={{
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75',
            marginBottom: '2rem',
          }}
        >
          Headquartered in <span style={{ fontWeight: '600', color: '#00414d' }}>San Francisco</span>, we
          operate globally, delivering top-notch solutions for businesses of all sizes.
        </p> */}
      </div>

      {/* Bottom Section - Image and Empowering Innovation */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row', // Place image and text side by side
          gap: '3rem',
        }}
      >
        {/* Bottom Left - Image Section */}
        <div
          style={{
            width: '100%',
            maxWidth: '50%',
            transition: 'transform 0.5s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={aboutImage}
            alt="About Us"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)')
            }
          />
        </div>

        {/* Bottom Right - Empowering Innovation Section */}
        <div
          style={{
            width: '100%',
            maxWidth: '50%',
            textAlign: 'left', // Align text to the left
          }}
        >
          <h3
            style={{
              fontSize: '1.875rem',
              fontWeight: '800',
              color: '#005b66',
              marginBottom: '1.5rem',
            }}
          >
            Empowering Innovation
          </h3>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#374151',
              lineHeight: '1.75',
              marginBottom: '1.5rem',
            }}
          >
            If you’re passionate about making a difference in healthcare and want to be part of a team that’s shaping the future of health solutions, <span style={{ fontWeight: '600', color: '#00414d' }}>EverLight</span> is the place for you. Explore our open positions and discover how you can contribute to our mission of transforming healthcare for the better.
            
          </p>
          <a
            href="https://www.evernorth.com/"
            style={{
              display: 'inline-block',
              backgroundColor: '#005b66',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00414d';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow =
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#005b66';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
          >
            Learn More About Evernorth
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;