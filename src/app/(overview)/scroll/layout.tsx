import Header from '@/app/ui/header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-screen flex-col ">
			<Header />
			{children}
		</main>
	);
}
