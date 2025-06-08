import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/services/answer";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('method: ', req.method)
  // res.status(200).json({ name: "John Doe" });
  if (req.method !== 'POST') {
    // 不是post，则返回错误
    res.status(200).json({ errno: -1, msg: 'Method 错误' })
  }

  // 获取并格式化表单数据
  const answerInfo = genAnswerInfo(req.body)

  // 和外部系统进行对接，不受自己控制的服务时最好用try/catch包一下
  try {
    // 提交到服务端 Mock
    const resData = await postAnswer(answerInfo)
    console.log('resData...', resData)
    if (resData.errno === 0) {
      // 如果提交成功
      res.redirect('/success')
    } else {
      // 提交失败
      res.redirect('/fail')
    }
  } catch (error) {
    res.redirect('/fail')
  }

  // res.status(200).json({ errno: 0 })
}
