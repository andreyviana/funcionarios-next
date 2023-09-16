import Link from "next/link"
import { RiHome2Line, RiUserLine, RiUserAddLine } from "react-icons/ri"

export const Sidebar = () => {
	return (
		<aside className="fixed left-0 h-screen w-20 flex items-center justify-center bg-[#1A1A1A] border-r-2 border-[#2C2C2C]">
			<ul className="">
				<li className="py-4">
					<Link href="/" className="group flex">
						<RiHome2Line className="h-12 w-12 border-2 rounded-full border-[#242424] p-2 hover:bg-neutral-50 hover:fill-black" />
						<span className="absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Início</span>
					</Link>
				</li>
				<li className="py-4">
					<Link href="/dashboard" className="group flex">
						<RiUserLine className="h-12 w-12 border-2 rounded-full border-[#242424] p-2 hover:bg-neutral-50 hover:fill-black" />
						<span className="absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Funcionários</span>
					</Link>
				</li>
				<li className="py-4">
					<Link href="/addemployee" className="group flex">
						<RiUserAddLine className="h-12 w-12 border-2 rounded-full border-[#242424] p-2 hover:bg-neutral-50 hover:fill-black" />
						<span className="absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-black bg-white text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">Adicionar Funcionários</span>
					</Link>
				</li>
			</ul>
		</aside>
	)
}