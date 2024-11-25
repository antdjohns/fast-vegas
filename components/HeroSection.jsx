import AddressInput from "./AddressInput";
import { useAddress } from "../context/AddressContext";

export default function HeroSection() {
  const { formData, setFormData } = useAddress();

  const handleScrollToForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div
      className="relative w-full h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/temp_background.png')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content inside the hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl text-shadow font-bold md:text-6xl">
          Fast Vegas Cash Offer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-shadow">
          Sell your home fast, for cash, and for a fair price.
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 mt-4">
          {/* Name Field */}
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md text-black"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-2">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md text-black"
            />
          </div>

          {/* Address Field */}
          <AddressInput />

          {/* Submit Button */}
          <button
            type="submit"
            className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md shadow-md transition duration-300 ease-in-out w-full px-8"
          >
            Get Cash Offer
          </button>
        </form>
      </div>
    </div>
  );
}
