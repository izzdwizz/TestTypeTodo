import Link from 'next/link';
import { prisma } from './db';

function getTodo() {
	return prisma.todo.findMany();
}
export default async function Home() {
	const todos = await getTodo();
	await prisma.todo.create({ data: { title: 'test', complete: false } });
	return (
		<>
			<header className=' px-12 my-8 w-full flex justify-between'>
				<h1 className='text-4xl font-bold'>Things to Do</h1>
				<Link href='/new'>New</Link>
			</header>

			<ul className='pl-4'>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</>
	);
}
