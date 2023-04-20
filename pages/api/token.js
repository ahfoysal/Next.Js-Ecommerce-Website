import { v4 as uuidv4 } from 'uuid';

const d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let accessToken = uuidv4()+hour*min ;
export default function handler(req, res) {
   
  res.status(200).json({ accessToken });
}