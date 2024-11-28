import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-black">
      <div className="w-1/2 relative p-6 bg-white/10 border border-white/20 rounded-lg backdrop-blur-md shadow-lg h-fit">
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-4xl font-bold text-white mb-8">Ingresar</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            label="Write your email"
            type="email"
            name="email"
            placeholder="tucorreo@mail.com"
            {...register("email", { required: true })}
          />

          {errors.email?.message && (
            <p className="bg-red-500 text-white text-center rounded-md py-1 mt-2 text-sm">
              {errors.email.message}
            </p>
          )}
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Write your password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.email?.message && (
            <p className="bg-red-500 text-white text-center rounded-md py-1 mt-2 text-sm">{errors.password?.message}</p>
          )}
          <Button>Entrar</Button>
        </form>

        <p className="flex gap-x-2 justify-between text-white mt-2">
          ¿no tienes una cuenta? <Link to="/register" className="border px-4 rounded-full">Registrarme</Link>
        </p>
      </div>
    </div>
  );
}