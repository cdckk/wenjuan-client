import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

function genAnswerInfo(reqBody: any) {
  const answerList: any[] = []

  Object.keys(reqBody).forEach(key => {
    if (key == 'questionId') return
    answerList.push({
      componentId: key,
      value: reqBody[key]
    })
  })
  return {
    questionId: reqBody.questionId || '',
    answerList
  }
}

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

  const answerInfo = genAnswerInfo(req.body)
  console.log('answerInfo', answerInfo)
  // 提交到服务端 Mock

  try {
    // 提交到服务端 Mock

    // 如果提交成功
    res.redirect('/success')

    // 提交失败
    // res.redirect('/fail')
  } catch (error) {
    
  }

  // res.status(200).json({ errno: 0 })
}
