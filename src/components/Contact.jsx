import { useState } from "react";


function Contact({ selectedPackage }) {


  const [packageName, setPackageName] = useState(selectedPackage || "");


  const [formData, setFormData] = useState({

    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""

  });



  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }



  function handleSubmit(e) {

    e.preventDefault();



    const text = `

New Client Request - Hadi Media


Name:
${formData.name}


Company:
${formData.company}


Email:
${formData.email}


Phone:
${formData.phone}


Package:
${packageName}


Message:
${formData.message}

`;



    const whatsappURL =
      "https://wa.me/96170369992?text=" +
      encodeURIComponent(text);



    window.open(whatsappURL, "_blank");


  }




  return (


    <section id="contact" className="contact">



      <h2>
        Get Started With Hadi Media
      </h2>



      <p className="contact-subtitle">

        Fill the form and choose the package that fits your business.

      </p>



      {selectedPackage && (

        <div className="selected-package">

          Selected Package:

          <strong>
            {" "}{selectedPackage}
          </strong>

        </div>

      )}




      <form

        className="contact-form"

        onSubmit={handleSubmit}

      >



        <input

          name="name"

          type="text"

          placeholder="Your Name"

          onChange={handleChange}

          required

        />



        <input

          name="company"

          type="text"

          placeholder="Company Name"

          onChange={handleChange}

        />



        <input

          name="email"

          type="email"

          placeholder="Email Address"

          onChange={handleChange}

          required

        />



        <input

          name="phone"

          type="tel"

          placeholder="Phone Number"

          onChange={handleChange}

          required

        />




        <select

          value={packageName}

          onChange={(e)=>setPackageName(e.target.value)}

        >



          <option value="">

            Select Package

          </option>



          <option value="Starter">

            Starter

          </option>



          <option value="Professional">

            Professional

          </option>



          <option value="Premium">

            Premium

          </option>



        </select>




        <textarea

          name="message"

          placeholder="Tell us about your business..."

          onChange={handleChange}

        />




        <button type="submit">

          Send Request

        </button>



      </form>



    </section>


  );

}



export default Contact;