// context/AddressContext.js
import { createContext, useState, useContext } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: '',
    comments: '',
  });

  const fetchSuggestions = async (input) => {
    if (input.length < 3) return;

    const res = await fetch(`/api/autocomplete?query=${input}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const data = await res.json();

    if (data.error) {
      setSuggestions([]);
    } else {
      setSuggestions(data.predictions);
    }
  };

  // Function to update formData, specifically for the address field
  const updateAddressInForm = (address) => {
    setFormData((prevData) => ({
      ...prevData,
      address,
    }));
  };

  return (
    <AddressContext.Provider value={{ query, setQuery, suggestions, setSuggestions, fetchSuggestions, formData, setFormData, updateAddressInForm }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
