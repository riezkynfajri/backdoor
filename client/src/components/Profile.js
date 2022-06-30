export default function Profile() {
  return (
    <div className="container relative w-4/5 h-[20vh] translate-x-[-50%] left-2/4 top-1/2 translate-y-[20%]">
      <div className="flex flex-col rounded-2xl bg-[#1d2226] h-[75vh]">
        <img
          className="w-full h-[35vh] opacity-70"
          src="https://t3.ftcdn.net/jpg/03/46/42/64/360_F_346426477_Vb43PjbRjTVaYMkYMr5CfvqTBeP5hLl2.jpg"
        />
        <img
          className="h-40 w-40 rounded-[50%] absolute border-4 border-zinc-800 border-opacity-90 top-[95%] ml-[28px]"
          src="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg"
        />
        <div className="flex flex-col h-[30vh] w-[400px] mt-16 mx-4 text-zinc-300">
          <h2 className="text-xl">HELLO</h2>
          <h2>Lorem Ipsum Dolorem Amet</h2>
          <h2 className="text-zinc-500">Lorem Ipsum Dolorem Amet</h2>
        </div>
      </div>
    </div>
  )
}
