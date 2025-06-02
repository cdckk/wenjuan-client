import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('method: ', req.method)
  // res.status(200).json({ name: "John Doe" });
  if (req.method !== 'POST') {
    // 不是post，则返回错误
    res.status(200).json({ errno: -1, msg: 'Method 错误' })
  }

  console.log('req.body', req.body)

  res.status(200).json({ errno: 0 })
}
