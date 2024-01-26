import { getServerSession } from "next-auth";
import Strip from "./Strip";
import Link from "next/link";
import { OrderStatus, PrismaClient } from "@prisma/client";

const Header = async () => {

    const session = await getServerSession();
    const user = session?.user;

    const prisma = new PrismaClient();
    const navigationDeps = await prisma.category.findMany({
        take: 5,
    })

    let cart_count = 0;
    if (user) {
        const {id: user_id} = await prisma.user.findFirstOrThrow({
            where: {
                email: user.email?.toString()
            },
            select: {
                id: true
            }
        })
    
        const items_count = (await prisma.order.findFirst({
            where: {
                user_id: user_id,
                status: OrderStatus.CART,
            },
            select: {
                items: true
            },
        }))?.items.length;

        if (items_count)
            cart_count = items_count;
    }

    prisma.$disconnect();

    return (
        <header className='bg-theme-primary text-white'>
            <nav className='bg-theme-secondary flex justify-between px-48'>
                <div className='flex space-x-6 ml-48'>
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
            <div className="px-48">
                <div className='flex'>
                    {/* <img src="" alt="" /> */}
                    <Link href={'/'}>
                        <div className='w-48 h-32 flex justify-center items-center font-bold font-mono text-2xl'>Loja Next</div>
                    </Link>
                    <div className='flex-1'>
                        
                        <div className='flex gap-4 h-full items-center'>
                            <form action=""
                                className='bg-white flex-1 h-10 pr-10 relative rounded-sm'>
                                <input className='text-black w-full px-2 h-full bg-transparent outline-none'
                                    placeholder='Busca na Loja' type="text" />
                                <button className='h-full w-10 absolute right-0 top-0
                                    flex justify-center items-center'>
                                    <i className="fa-solid fa-magnifying-glass text-theme-primary text-xl"></i>
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
                                        <>Fazer <Link className="font-semibold hover:underline" href='/api/auth/signout'>Logout</Link></> :
                                        <>
                                        <Link className="font-semibold hover:underline" href='/api/auth/signin'>Entre</Link> ou <Link className="font-semibold hover:underline" href='#'>cadastre-se</Link>
                                        </>}
                                    </span>
                                </p>
                                <i className="fa-solid fa-heart text-4xl"></i>
                                <Link href={'/cart'}>
                                    <i className="fa-solid fa-basket-shopping text-5xl relative">
                                        <div className='bg-green-primary size-5 absolute right-0 bottom-0
                                        rounded-full outline-4 outline outline-theme-primary
                                        flex items-center justify-center'>
                                            <span className='font-extralight text-xs'>{cart_count}</span>
                                        </div>
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className='flex justify-between py-3 font-normal'>
                    <span>Todos os departamentos <i className="fa-solid fa-bars"></i>
                    </span>
                    {navigationDeps.map((item, index) => (
                        <Link key={index} href={`/category/${item.url}`}>{item.name}</Link>
                    ))}
                </nav>
                <Strip></Strip>
            </div>
        </header>
    );
};

export default Header;