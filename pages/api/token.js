import axios from "../../utils/axiosInstance";

export default async function handler(req, res) {
  try {
    const response = await axios.post('/generate-token', {})
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
};