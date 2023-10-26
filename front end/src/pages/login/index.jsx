import './style.css'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().min(1, { message: 'Prencha o campo' }),
  password: zod.string().min(6, { message: 'Senha deve ter mais de 6 digitos'}),
});


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div id="login">
      <h1>Login </h1>
      <form className="form" onSubmit={handleSubmit(e => console.log(e))}>
        <div className="field">
          <label htmlFor="">Email:</label>
          <input type="text" name="email" id="email" {...register('email')} />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
        <div className="field">
          <label htmlFor="">Senha:</label>
          <input type="text" name="password" id="password" {...register('password')} />
          {errors.password?.message && <p>{errors.password?.message}</p>}
        </div>
        <div className="actions">
          <button type='submit'> Entrar </button>
        </div>
      </form>
    </div>
  )
}
