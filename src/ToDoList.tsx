import React from 'react'
import { useForm } from 'react-hook-form'

interface IForm
{
  email : string
  userName : string
  userId : string
  password : string
  passwordConfirMation : string
  extraError?: string
}

function ToDoList()
{ 
  const { register , handleSubmit , formState:{errors}, setError} = useForm<IForm>()
  const onValid = (data : IForm) =>
  {
    if(data.password !== data.passwordConfirMation)
    {
      setError('passwordConfirMation' , {message: '비밀번호가 달라요'}, {shouldFocus: true})
    }
    // setError('extraError' , { message: '서버 장애가 발생했습니다.'})
  }
  console.log(errors)

  return( 
    <div>
      <form style={{display: 'flex' , flexDirection : 'column'}} onSubmit={handleSubmit(onValid)}>
        <input {...register('email', {required: '이메일 주소를 입력하세요' , pattern:{value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ , message: '이메일 주소를 정확히 입력해주세요'}})}placeholder='이메일 주소를 입력하세요'/>
        <span>{errors?.email?.message}</span>
        <input {...register('userName', {required: '이름을 입력하세요' ,pattern:{value: /^[가-힣]/, message:'이름을 한글로 입력해주세요'}})}placeholder='이름을 입력하세요'/>
        <span>{errors?.userName?.message}</span>
        <input {...register('userId', {required: '아이디를 입력하세요' , pattern:{value: /^[a-zA-Z0-9]/, message: '아이디가 너무 짧아요'}})}placeholder='아이디를 입력하세요'/>
        <span>{errors?.userId?.message}</span>
        <input type='password' {...register('password', {required: '비밀번호를 입력하세요' , minLength: 5})}placeholder='비밀번호를 입력하세요'/>
        <span>{errors?.password?.message}</span>
        <input type='password'{...register('passwordConfirMation', {required: '비밀번호를 확인해주세요' , minLength: {value: 5, message: '비밀번호가 너무 짧아요'},})}placeholder='비밀번호를 입력하세요'/>
        <span>{errors?.passwordConfirMation?.message}</span>
        <button>ADD</button>
      </form>
    </div>
  )
}

export default ToDoList