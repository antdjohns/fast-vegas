import { useAddress } from "../context/AddressContext";

export default function AddressInput() {
  const {
    query,
    setQuery,
    suggestions,
    setSuggestions,
    fetchSuggestions,
    formData,
    setFormData,
  } = useAddress();

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    fetchSuggestions(input);

    // Update the address in formData
    setFormData((prevData) => ({
      ...prevData,
      address: input,
    }));
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion.description);
    setFormData((prevData) => ({
      ...prevData,
      address: suggestion.description,
    }));
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="w-full mb-2 text-left text-black">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter your address"
        className="w-full p-3 border rounded-md text-black"
      />
      {suggestions.length > 0 && (
        <ul className="border rounded bg-white shadow-lg mt-1">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
