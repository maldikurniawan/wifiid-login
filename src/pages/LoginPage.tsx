import { Header, VoucherCard } from "@/components";
import { User } from "@/pages";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="min-h-screen py-3">
            <Header />
            <div className="flex xl:flex-row flex-col-reverse gap-4 justify-between mt-[75px] px-4 xl:px-40 ">
                <div className="w-full xl:w-[65%] p-4 bg-white">
                    <p className="font-black text-primary text-xl mb-4">Voucher List</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {Array.from({ length: 20 }, (_, i) => (
                            <Link key={i} to={"/beli-voucher"}>
                                <VoucherCard
                                    label="Voucher"
                                    labelColor="bg-primary"
                                    title={`Paket Hemat ${i + 1}`}
                                    duration={`${(i % 4 + 1) * 3} jam`}
                                    speed={`${10 + (i % 5) * 5} Mbps`}
                                    price={`${5000 + i * 100000}`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full xl:w-[35%] p-4 xl:sticky xl:top-[88px] xl:h-fit">
                    <User />
                </div>
            </div>
        </div>
    )
}

export default LoginPage