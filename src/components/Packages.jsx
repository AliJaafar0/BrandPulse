function Packages({ setSelectedPackage }) {

  const packages = [

    {
      name: "Starter",
      price: "$400",
      features: [
        "Social Media Management",
        "Creative Content",
        "Basic Marketing Support"
      ]
    },


    {
      name: "Professional",
      price: "$600",
      popular: true,
      features: [
        "Advanced Content Creation",
        "Advertising Campaigns",
        "Marketing Strategy"
      ]
    },


    {
      name: "Premium",
      price: "$1200",
      features: [
        "Complete Brand Management",
        "Full Digital Strategy",
        "Maximum Growth Support"
      ]
    }

  ];



  return (

    <section id="packages" className="packages">


      <h2>
        Our Packages
      </h2>


      <p className="packages-subtitle">
        Choose the plan that fits your business needs.
      </p>



      <div className="packages-container">


        {packages.map((pkg, index) => (


          <div
            className="package-card"
            key={index}
          >



            {pkg.popular && (

              <span className="popular">
                Most Popular
              </span>

            )}



            <h3>
              {pkg.name}
            </h3>



            <h4>

              {pkg.price}

              <span>
                /month
              </span>

            </h4>




            <ul>

              {pkg.features.map((feature, i) => (

                <li key={i}>
                  ✓ {feature}
                </li>

              ))}

            </ul>




            <button

              onClick={() => {


                setSelectedPackage(pkg.name);


                setTimeout(() => {


                  document
                  .getElementById("contact")
                  .scrollIntoView({

                    behavior: "smooth"

                  });


                }, 100);


              }}

            >

              Choose {pkg.name}


            </button>




          </div>


        ))}


      </div>


    </section>

  );

}


export default Packages;