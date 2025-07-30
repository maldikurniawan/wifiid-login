import { VoucherCard } from "@/components";
import { User } from "@/pages";

const LoginPage = () => {
    return (
        <div className="min-h-screen py-3">
            <div className="px-4 xl:px-40 fixed z-40 w-full">
                <div
                    className={`p-4 w-full text-xl text-primary font-black border-gray-100 rounded-xl flex items-center justify-between transition-all duration-300 shadow backdrop-blur-md bg-white/85`}
                >
                    Voucher Store
                </div>
            </div>
            <div className="flex xl:flex-row flex-col-reverse gap-4 justify-between mt-[75px] px-4 xl:px-40 ">
                <div className="w-full xl:w-[65%] p-4 bg-white border-gray-100">
                    <p className="font-black text-primary text-xl mb-4">Voucher List</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {Array.from({ length: 20 }, (_, i) => (
                            <VoucherCard
                                key={i}
                                label="Voucher"
                                labelColor="bg-primary"
                                title={`Paket Hemat ${i + 1}`}
                                duration={`${(i % 4 + 1) * 3} jam`}
                                speed={`${10 + (i % 5) * 5} Mbps`}
                                price={`${5000 + i * 100000}`}
                            />
                        ))}
                    </div>
                </div>
                {/* ini jadi fixed */}
                <div className="w-full xl:w-[35%] p-4 xl:sticky xl:top-[88px] xl:h-fit">
                    <User />
                </div>
            </div>
        </div>
    )
}

export default LoginPage