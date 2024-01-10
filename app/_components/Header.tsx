import { getServerSession } from "next-auth";
import Strip from "./Strip";
import Link from "next/link";

const Header = async () => {

    const session = await getServerSession();
    const user = session?.user;

    return (
        <header className='bg-red-primary text-white px-32'>
            <div className='flex'>
                {/* <img src="" alt="" /> */}
                <div className='w-48 h-40 flex justify-center items-center font-bold font-mono text-2xl'>Loja Next</div>
                <div className='flex-1'>
                    <nav className='flex justify-between'>
                        <div className='flex space-x-6'>
                            <span>opcao1</span>
                            <span>opcao1</span>
                            <span>opcao1</span>
                            <span>opcao1</span>
                            <span>opcao1</span>
                            <span>opcao1</span>
                        </div>
                        <div className='flex space-x-6'>
                            <span>atendimento</span>
                            <span>Compre pelo tel: 0800 000 0000</span>
                            <span>Meus pedidos</span>
                        </div>
                    </nav>
                    <div className='flex gap-4 min-h-32 items-center'>
                        <form action=""
                            className='bg-white flex-1 h-10 pr-10 relative rounded-sm'>
                            <input className='text-black w-full px-2 h-full bg-transparent outline-none'
                                placeholder='Busca na Loja' type="text" />
                            <button className='h-full w-10 absolute right-0 top-0
                                flex justify-center items-center'>
                                <i className="fa-solid fa-magnifying-glass text-red-primary text-xl"></i>
                            </button>
                        </form>
                        <div className='flex w-96 justify-between'>
                            <p className='text-sm'>
                                <span className='font-bold block'>
                                    {user ?
                                    <>Olá, {user.name}</> :
                                    <>Bem-vindo :)</>}
                                </span>
                                <span>
                                    {user ?
                                    <>Fazer <Link className="font-semibold" href='/api/auth/signout'>Logout</Link></> :
                                    <>
                                    <Link className="font-semibold" href='/api/auth/signin'>Entre</Link> ou <Link className="font-semibold" href='#'>cadastre-se</Link>
                                    </>}
                                </span>
                            </p>
                            <i className="fa-solid fa-heart text-4xl"></i>
                            <i className="fa-solid fa-basket-shopping text-5xl relative">
                                <div className='bg-green-primary size-5 absolute right-0 bottom-0
                                rounded-full outline-4 outline outline-red-primary
                                flex items-center justify-center'>
                                    <span className='font-extralight text-xs'>0</span>
                                </div>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='flex justify-between py-3'>
                <span>Todos os departamentos v</span>
                <span>departamento</span>
                <span>departamento</span>
                <span>departamento</span>
                <span>departamento</span>
                <span>departamento</span>
            </nav>
            <Strip></Strip>
        </header>
    );
};

export default Header;