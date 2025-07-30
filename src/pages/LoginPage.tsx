import { Voucher } from "@/components"
import { User } from "@/pages"

const LoginPage = () => {
    return (
        <div className="min-h-screen px-4 xl:px-40 py-2">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 justify-between">
                    <div className="p-4 w-full bg-white rounded-xl shadow-md border-t border-gray-100">
                        Voucher
                    </div>
                </div>
                <div className="flex xl:flex-row flex-col-reverse gap-2 justify-between">
                    <div className="w-full xl:w-[65%] p-4 bg-white rounded-xl shadow-md border-t border-gray-100">
                        <p className="font-black text-primary text-xl mb-4">Voucher List</p>
                        <Voucher />
                    </div>
                    <div className="w-full xl:w-[35%] p-4 bg-white rounded-xl shadow-md border-t border-gray-100">
                        <User />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage