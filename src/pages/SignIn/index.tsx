
import axios from 'axios'
import { FormEvent, useState } from 'react'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Heading } from '../../components/Heading'
import { TextInput } from '../../components/TextInput'
import { Checkbox } from '../../components/Checkbox'
import { Text } from '../../components/Text'
import { Logo } from '../../Logo'

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function hadleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'lucasblante@hotmail.com',
      password: '12345678'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100'>

      <header className='flex flex-col items-center'>
        <Logo className='animate-pulse' />
        <Heading size='lg' className='mt-2'>Ignite Lab</Heading>
        <Text size='lg' className='text-grey-400 mt-1'>Faça login e começe a usar!</Text>
      </header>

      <form onSubmit={hadleSignIn} className='flex flex-col items-stretch w-full max-w-[400px] gap-4 mt-10'>

        {isUserSignedIn && <Text>Login Realizado!</Text>}

        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='seuemail@exemplo.com.br'></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' placeholder='**********'></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-grey-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-grey-400 underline hover:text-grey-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-grey-400 underline hover:text-grey-200'>Não possui conta? Cria uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}