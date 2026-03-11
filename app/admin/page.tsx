export default function Admin() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Manga Upload
      </h1>

      <input 
        type="text" 
        placeholder="нэр"
        className="border p-2 mb-4 block"
      />

      <input 
        type="file"
        className="mb-4"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Upload
      </button>

    </div>
  );
}