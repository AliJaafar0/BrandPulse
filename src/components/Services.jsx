function Services() {
  const services = [
    {
      icon: "🎯",
      title: "Digital Advertising",
      description:
        "Powerful advertising campaigns across Google, Meta, and TikTok to reach the right audience."
    },
    {
      icon: "🎬",
      title: "Creative Content",
      description:
        "Professional videos, photography, and creative content that make your brand stand out."
    },
    {
      icon: "📈",
      title: "Marketing Strategy",
      description:
        "Smart strategies designed to grow your brand and achieve better results."
    },
    {
      icon: "🚀",
      title: "Brand Growth",
      description:
        "Complete digital solutions that help businesses expand and connect with customers."
    }
  ];

  return (
    <section id="Services" className="Services">

      <h2>Our Services</h2>

      <p className="services-subtitle">
        We provide creative and strategic solutions to help brands grow.
      </p>

      <div className="services-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;