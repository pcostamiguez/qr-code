export default function Home() {
  return (
    <main className="container flex flex-col items-center">
      <div className="p-4 w-[320px] h-[497px] bg-white rounded-8 shadow-lg">
        <div className="flex justify-center bg-blue-500 rounded-8 w-[288px] h-[288px]">

        </div>
        <div className="flex flex-col items-center mt-6">
          <h1 className="font-bold color-slate-700 text-[22px] text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-info m-4">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>

    </main>
  );
}
