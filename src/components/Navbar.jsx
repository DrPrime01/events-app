import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="py-2 flex items-center justify-between">
			<Link href="/" className="text-xl font-semibold">
				Events
			</Link>
			<div className="flex items-center gap-x-3">
				<Link href="/" className="font-medium py-1.5 px-2">
					Home
				</Link>
				<Link href="/events" className="font-medium py-1.5 px-2">
					Events
				</Link>
				<Link href="/about" className="font-medium py-1.5 px-2">
					About
				</Link>
			</div>
		</nav>
	);
}
