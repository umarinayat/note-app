import { useState } from "react";

const NewNotes = () => {
  const [formData, setFormData] = useState({
    subject: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  return (
    <div className="p-5  flex flex-col justify-center">
      <h2 className="text-center text-lg font-extrabold">Create New Note</h2>
      <form className=" flex flex-col items-center justify-center gap-2">
        <label htmlFor="subject" className="pt-4 text-xl font-bold font-mono">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="border-black border w-1/4 h-11 rounded-md"
          name="subject"
          value={formData.subject}
          onChange={handleSubmit}
        />
        <label htmlFor="body" className="pt-4 text-xl font-bold font-mono">
          Body
        </label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          value={formData.body}
          className="border border-black rounded-lg w-1/4 mb-2"
          onChange={handleSubmit}
        ></textarea>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewNotes;
