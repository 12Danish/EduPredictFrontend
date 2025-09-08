import axios from "axios";
const processStudentData = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axios.post("http://127.0.0.1:5000/process_file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("Backend response:", res.data);
};

export default processStudentData;
