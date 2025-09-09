import axios from "axios";

const processStudentData = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("http://127.0.0.1:5000/process_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Backend response:", res.data);

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
