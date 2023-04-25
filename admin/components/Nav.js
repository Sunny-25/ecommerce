import { navItems } from "@/constants/constants";
import { LogoIcon } from "@/constants/images/svg";
import { styles } from "@/styles/styles";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
	var { pathname } = useRouter();
	pathname = pathname.split("/")[1];
	const active =
		"bg-white text-black rounded-[2rem] transition transition-all ease-in-out duration-1000 font-semibold";

	return (
		// LEFT
		<aside className={`w-[25vw] flex flex-col`}>
			<Link
				href={"/"}
				className="bg-white flex justify-center font-semibold items-center gap-3 p-5 ">
				<LogoIcon />
				<span>Dashboard</span>
			</Link>
			{/* NAV LINKS */}
			<nav>
				{navItems.map(({ name, path, icon }) => (
					<Link
						href={path}
						key={name}
						className={`flex justify-center hover:font-bold items-center w-[60%] h-12 gap-2 ${
							pathname === path.split("/")[1] ? active : ""
						}`}>
						{icon}
						<span>{name}</span>
					</Link>
				))}
			</nav>
		</aside>
	);
}
