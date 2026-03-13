<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>J'Bistro Restaurant - Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-image: url('/bg.png'); 
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
        }
        .overlay {
            background: rgba(0, 0, 0, 0.4);  
        }
    </style>
</head>
<body class="flex items-center justify-center text-center font-sans">

    <div class="overlay fixed inset-0"></div>

    <div class="relative z-10 flex flex-col items-center justify-center gap-8 py-12 px-6 max-w-md w-full">

        <div class="flex flex-col items-center">
            <h1 class="text-5xl md:text-6xl font-bold text-amber-800 tracking-wide drop-shadow-lg">
                J'Bistro
            </h1>
            <p class="text-xl text-amber-700 font-semibold mt-1 drop-shadow">
                RESTAURANT ★
            </p>
        </div>

        <h2 class="text-3xl font-semibold text-white drop-shadow-lg">
            Welcome to<br>J'Bistro
        </h2>

        <form class="w-full flex flex-col gap-6 mt-6">
            <div class="flex flex-col">
                <label for="email" class="text-lg text-white font-medium mb-2">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email"
                    class="px-5 py-4 rounded-xl bg-[C38752] bg-opacity-90 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 text-lg placeholder-gray-600"
                    required
                />
            </div>

            <div class="flex flex-col">
                <label for="password" class="text-lg text-white font-medium mb-2">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password"
                    class="px-5 py-4 rounded-xl bg-[#f5e8d3] bg-opacity-90 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 text-gray-800 text-lg placeholder-gray-600"
                    required
                />
            </div>

            <button 
                type="submit"
                class="mt-4 bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-8 rounded-xl text-xl transition duration-300 shadow-lg"
            >
                Login
            </button>
        </form>

        <p class="text-white mt-6 text-lg">
            Don't have an account? 
            <a href="/register" class="text-amber-300 hover:text-amber-200 underline font-medium">
                Register here
            </a>
        </p>

    </div>

</body>
</html>