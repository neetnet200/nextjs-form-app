import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from 'next/image';

export default function Form() {
  const [formStep, setFormStep] = React.useState(0);
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const renderButton = () => {
    if (formStep >= 3) {
      return undefined;
    } else if (formStep <= 1) {
      return (
        <button
          className="next-button"
          type="button"
          onClick={completeFormStep}
        >
          NEXT
        </button>
      );
    } else if (formStep === 2) {
      return (
        <button
          className="submit-button"
          type="button"
          onClick={completeFormStep}
        >
          SUBMIT
        </button>
      );
    }
  };
  const url = "";
  //  const url = "http://localhost:4000/api/v1/farm_info"
  const [data, setData] = useState({
    farm_info: {
      farmer_attributes: {
        first_name: "",
        last_name: "",
        phone_no: "",
        email: "",
      },
      farm_name: "",
      municipality: "",
      location: "",
      altitude: "",
      property_size: "",
      coffee_area: "",
      description: "",
    },
  });

  function submit(e) {
    axios.post(url, data).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    let target = e.target.id.split("-");
    let nest = target[0];
    let name = target[1];
    let value = e.target.value;
    const newdata = { ...data };
    nest === "farmer_attributes"
      ? (newdata["farm_info"][nest][name] = value)
      : (newdata["farm_info"][name] = value);
    setData(newdata);
  }

  const router = useRouter();

  return (
    <div className="form-wrap">
      <Image 
      className="logo" 
      src="/square_farmore_logo_small.png"
      alt="Farmore logo" 
      height={110}
      width={110}
      />
      <div className="form-container">
        <div className="heading-form">
          <h1 className="heading">
            FAR MORE <br></br> THAN COFFEE
          </h1>
        </div>
        <form autoComplete="off" onSubmit={(e) => submit(e)}>
          {formStep === 0 && (
            <section>
              <div className="form-container-inner-wrap">
                <div className="input-wrap">
                  <label className="label">FIRST NAME</label>
                  <input
                    className="input"
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => handle(e)}
                    id="farmer_attributes-first_name"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">LAST NAME</label>
                  <input
                    className="input"
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => handle(e)}
                    id="farmer_attributes-last_name"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">PHONE NUMBER</label>
                  <input
                    className="input"
                    label="Phone Number"
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => handle(e)}
                    id="farmer_attributes-phone_no"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">EMAIL ADDRESS</label>
                  <input
                    className="input"
                    label="Email Address"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => handle(e)}
                    id="farmer_attributes-email"
                  />
                </div>
              </div>
            </section>
          )}
          {formStep === 1 && (
            <section>
              <div className="form-container-inner-wrap">
                <div className="input-wrap">
                  <label className="label">FARM NAME</label>
                  <input
                    className="input"
                    label="Farm Name"
                    type="text"
                    placeholder="Farm Name"
                    onChange={(e) => handle(e)}
                    id="farm_info-farm_name"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">MUNICIPALITY</label>
                  <input
                    className="input"
                    label="Municipality"
                    type="text"
                    placeholder="Municipality"
                    onChange={(e) => handle(e)}
                    id="farm_info-municipality"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">LOCATION</label>
                  <input
                    className="input"
                    label="Location"
                    type="text"
                    placeholder="Location"
                    onChange={(e) => handle(e)}
                    id="farm_info-location"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">ALTITUDE</label>
                  <input
                    className="input"
                    label="Altitude"
                    type="text"
                    placeholder="Altitude"
                    onChange={(e) => handle(e)}
                    id="farm_info-altitude"
                  />
                </div>
              </div>
            </section>
          )}
          {formStep === 2 && (
            <section>
              <div className="form-container-inner-wrap">
                <div className="input-wrap">
                  <label className="label">PROPERTY SIZE</label>
                  <input
                    className="input"
                    label="Property Size"
                    type="text"
                    placeholder="Property Size"
                    onChange={(e) => handle(e)}
                    id="farm_info-property_size"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">AREA COFFEE</label>
                  <input
                    className="input"
                    label="Area Coffee"
                    type="text"
                    placeholder="Area Coffee"
                    onChange={(e) => handle(e)}
                    id="farm_info-coffee_area"
                  />
                </div>

                <div className="input-wrap">
                  <label className="label">SHORT DESCRIPTION OF FARM</label>
                  <textarea
                    className="textarea"
                    label="Short Description of Farm"
                    type="text"
                    placeholder="Short Description of Farm"
                    onChange={(e) => handle(e)}
                    id="farm_info-description"
                  />
                </div>
              </div>
            </section>
          )}

          {formStep === 3 && (
            <h2 className="thankyou">
              {submit()}
              Thankyou for entering your details, Farmore will contact you soon!
            </h2>
          )}
          {renderButton()}
        </form>
      </div>
    </div>
  );
}
