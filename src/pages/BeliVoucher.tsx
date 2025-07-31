import { Button, Card, Header, TextField, VoucherCard } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";

const BeliVoucher = () => {
    const i = 5;

    const formik = useFormik({
        initialValues: {
            email: "",
            no_hp: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email harus diisi"),
            no_hp: Yup.string().required("Nomor harus diisi"),
        }),
        onSubmit: () => {
        },
    });

    return (
        <div className="min-h-screen py-3">
            <Header />
            <div className="flex xl:flex-row flex-col p-4 gap-4 justify-between mt-[75px] px-8 xl:px-44">
                <div className="w-full xl:w-[40%]">
                    <Card>
                        <p className="font-black text-primary">Cara Pembelian Voucher</p>
                        <hr className="border border-gray-100 my-2" />
                        <div className="text-sm text-gray-600 font-medium">
                            <div>1. Pilih Nominal Voucher yang kamu inginkan</div>
                            <div>2. Selesaikan pembayaran</div>
                            <div>3. Kode voucher akan segera kamu dapatkan</div>
                        </div>
                    </Card>
                </div>
                <div className="w-full xl:w-[60%]">
                    <Card>
                        <form onSubmit={formik.handleSubmit}>
                            <p className="font-black text-primary">Pembelian Voucher</p>
                            <hr className="border border-gray-100 my-2" />
                            <div className="text-sm text-gray-600 font-medium">
                                <div className="font-black text-primary">1. Voucher Pilihan</div>
                                <div className="py-10">
                                    <VoucherCard
                                        label="Voucher"
                                        labelColor="bg-primary"
                                        title={`Paket Hemat ${i + 1}`}
                                        duration={`${(i % 4 + 1) * 3} jam`}
                                        speed={`${10 + (i % 5) * 5} Mbps`}
                                        price={`${5000 + i * 100000}`}
                                        buy={false}
                                    />
                                </div>
                                <hr className="border border-gray-100 my-2" />
                                <div className="font-black text-primary mb-2">2. Email</div>
                                <TextField
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Masukan Email"
                                    rounded="xl"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && formik.errors.email}
                                />
                                <div className="font-black text-primary my-2">3. No. WhatsApp</div>
                                <TextField
                                    prefix="+62"
                                    id="no_hp"
                                    name="no_hp"
                                    type="text"
                                    placeholder="Masukan No. WhatsApp"
                                    rounded="xl"
                                    value={formik.values.no_hp}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.no_hp && formik.errors.no_hp}
                                />
                                <Button rounded="xl" textcolor="white" className="w-full mt-8">Lanjut ke Pembayaran</Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default BeliVoucher