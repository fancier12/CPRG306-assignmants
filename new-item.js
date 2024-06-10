function Button(){
    const [quantity, setQuantity]= useState(1);
    const [name, setName]= useState("");
    const [category, setCategory]= useState("produce ");
    const handleClick = (event)=>{

    
        
            event.preventDefault();
        
    const item ={
        name: name,
        quantity: quantity,
        category: category,
    };
    console.log(item);
    (`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset state variables to their initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="nameInput" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div> 
        <div>
          <label htmlFor="quantityInput" className="block font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantityInput"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="categorySelect" className="block font-medium">
            Category:
          </label>
          <select
            id="categorySelect"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            {/* Add other category options here */}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Submit
        </button>
      </form>
    </div>
  );
  
};