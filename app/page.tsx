import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany()

  return (
    <div className='flex flex-col gap-5 items-center justify-center w-screen h-screen'>
      <Button>
        Click me!
      </Button>
      <h1>All posts: {posts.length} </h1>
      {posts.map(post => (
        <div key={post.id} className="min-w-60 shadow-sm rounded-md bg-slate-100 py-5 px-10">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
