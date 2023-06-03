import Image from "next/image";
export default function Home() {
  return (
    <div class="flex items-center justify-center placed-center">
      <div className="max-w-lg bg-white bg-opacity-50 shadow-xl rounded-2xl shadow-md p-5">
        <Image
          className="w-32 h-32 rounded-full mx-auto"
          src="/profile.jpg"
          alt="Roberto Profile"
          width={100}
          height={24}
          priority
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          Roberto Martínez
        </h2>
        <p className="text-center text-gray-600 mt-1">Software Developer</p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
}
