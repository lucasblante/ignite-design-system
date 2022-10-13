import './styles/global.css';
import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button';
import { Envelope, Lock } from 'phosphor-react';

export function App() {
  return (
    <div className='w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100'>
      <header className='flex flex-col items-center'>
        <Logo className='animate-pulse' />
        <Heading size='lg' className='mt-2'>Ignite Lab</Heading>
        <Text size='lg' className='text-grey-400 mt-1'>Faça login e começe a usar!</Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-[400px] gap-4 mt-10'>
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
