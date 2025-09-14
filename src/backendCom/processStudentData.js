import axios from "axios";

const processStudentData = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:5000";

  try {
    const res = await axios.post(`${backendUrl}/process_file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

  

    // ✅ return both data and status
    return {
      data: res.data,
      status: res.status,
    };

  } catch (error) {
    // handle errors
    if (error.response) {
      // backend returned error response
      return {
        data: error.response.data,
        status: error.response.status,
      };
    } else {
      // network/other error
      return {
        data: { error: error.message },
        status: 500,
      };
    }
  }
};

export default processStudentData;
