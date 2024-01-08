const Strip = () => {
    return (
        <div className="h-1.5 flex">
            <hr className="h-full w-1/3 border-0
                bg-gradient-to-r from-yellow-primary from-15% via-orange-600 via-50% to-fuchsia-500"/>
            <hr className="h-full w-1/3 border-0
                bg-gradient-to-r from-fuchsia-500 via-violet-600 via-50% to-sky-400"/>
            <hr className="h-full w-1/3 border-0
                bg-gradient-to-r from-sky-400 via-blue-500 via-50% to-green-500 to-85%"/>
        </div>
    )
}

export default Strip;