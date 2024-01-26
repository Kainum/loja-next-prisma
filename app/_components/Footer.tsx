import Strip from "./Strip";

const Footer = () => {
    return (
        <footer className='bg-theme-primary text-white px-48'>
            <Strip></Strip>
            <div className="py-16">
                <div className='mx-32 flex flex-col gap-2'>
                    <p className='text-center text-lg'>
                        made by <a className='underline font-semibold' target='_blank' href="https://github.com/Kainum">Luciano Elly</a>
                    </p>
                    <hr className="w-96 mx-auto" />
                    <p className='text-center text-lg'>
                        <a className='underline font-normal' target='_blank' href="https://nextjs.org/">Next.js</a>
                        <span> | </span>
                        <a className='underline font-normal' target='_blank' href="https://www.prisma.io/">Prisma</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;