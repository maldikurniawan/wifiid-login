
const NotFound = () => {
    return (
        <div className="relative h-screen flex justify-center items-center text-primary">
            <div className='flex flex-col'>
                <img src="/assets/images/404.png" alt="404" className="w-auto max-w-full" />
                <div className='text-center font-bold'>
                    404 NOT FOUND
                </div>
            </div>
        </div>
    );
};

export default NotFound;
