'use client';

import { useActionState } from 'react';
import { registerAction } from '@/app/actions/auth';
import Image from 'next/image';

export default function Register() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <div className="relative min-h-screen w-full font-sans" style={{ overflowY: 'auto' }}>
      <Image src="/bg.png" alt="Background" fill className="object-cover brightness-[0.85]" priority sizes="100vw" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[1]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="flex flex-col items-center gap-5 text-center max-w-md w-full">

          {/* Logo */}
          <Image src="/plogo.png" alt="J'Bistro Logo" width={224} height={224} className="w-56 md:w-64 drop-shadow-2xl" />

          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl">J&apos;Bistro</h1>
          <p className="text-lg font-semibold uppercase text-white drop-shadow-lg">RESTAURANT</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mt-4">
            Register to<br />J&apos;Bistro
          </h2>

          {/* Flash messages */}
          {state?.error && <p className="text-red-400 font-medium mt-2">{state.error}</p>}
          {state?.success && <p className="text-green-400 font-medium mt-2">{state.message}</p>}

          {/* Form */}
          <div className="w-full rounded-3xl bg-[#f5e0c2]/90 p-8 shadow-2xl backdrop-blur-sm border border-amber-800/30 mt-6">
            <form action={formAction} className="flex flex-col gap-5">
              <div className="flex flex-col text-left">
                <label className="mb-1.5 text-lg font-medium text-gray-800">Email</label>
                <input name="email" type="email" required placeholder="example@email.com"
                  className="rounded-xl border border-amber-700/50 bg-white/70 px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <div className="flex flex-col text-left">
                <label className="mb-1.5 text-lg font-medium text-gray-800">Password</label>
                <input name="password" type="password" required placeholder="Minimum 6 characters"
                  className="rounded-xl border border-amber-700/50 bg-white/70 px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-600" />
              </div>
              <button type="submit" disabled={pending}
                className="mt-3 rounded-xl bg-amber-800 py-3.5 px-10 text-xl font-bold text-white hover:bg-amber-900 transition disabled:opacity-60">
                {pending ? 'Registering...' : 'Register'}
              </button>
            </form>
          </div>

          <p className="mt-6 text-lg text-white">
            Do you already have an account?{' '}
            <a href="/" className="text-amber-300 underline hover:text-amber-200">Login here</a>
          </p>

        </div>
      </div>
    </div>
  );
}
