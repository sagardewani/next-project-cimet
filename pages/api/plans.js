import axios from "../../utils/axiosInstance";


export default async function handler(req, res) {
  try {
    const response = await axios.post('/plan-list', {
      "session_id": "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
    }, { headers: { 'Auth-token': req.headers['auth-token'] }})
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error);
  }
}