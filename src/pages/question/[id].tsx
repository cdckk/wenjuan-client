import QuestionInput from '@/components/QuestionComponents/QuestionInput'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'
import Head from 'next/head'

type PropsType = {
  id: string
}

export default function Question(props: PropsType) {
  return <>
    <Head>
      <title>Question</title>
    </Head>
    <main>
      <h1>Question page</h1>
      <p>{props.id}</p>

      <form action="">
        <QuestionInput fe_id='c1' props={{ title: '你的姓名', placeholder: '请输入' }}></QuestionInput>
        <QuestionRadio fe_id='c2' props={{
          title: '你的性别',
          options: [
            { value: 'male', text: '男' },
            { value: 'female', text: '女' },
          ],
          value: 'male',
          isVertical: false
          }}></QuestionRadio>
      </form>
    </main>
  </>
}