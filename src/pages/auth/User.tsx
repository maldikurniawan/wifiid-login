import { Button, TextField } from "@/components";
import { useFormik } from "formik";
import { useState } from "react";
import { TbEye, TbEyeOff, TbLoader2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const User = () => {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username harus diisi"),
            password: Yup.string().required("Password harus diisi"),
        }),
        onSubmit: (values) => {
            setLoading(true);
            setTimeout(() => {
                if (values.username === "admin" && values.password === "admin") {
                    navigate("/");
                } else {
                    alert("Username or Password is wrong!");
                }
                setLoading(false);
            }, 1000);
        },
    });

    return (
        <div>
            <div className="text-primary font-black text-xl">User Login</div>
            <form onSubmit={formik.handleSubmit} className="space-y-4 pt-4 text-[#4a5565]">
                <TextField
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    variant="outline"
                    rounded="xl"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && formik.errors.username}
                />
                <div className="relative">
                    <TextField
                        label="Password"
                        id="password"
                        name="password"
                        type={isShow ? "text" : "password"}
                        placeholder="Password"
                        variant="outline"
                        rounded="xl"
                        suffix={
                            <div
                                className="cursor-pointer"
                                onClick={() => setIsShow(!isShow)}
                            >
                                {isShow ? <TbEyeOff size={24} className="text-[#E4E4E7]"/> : <TbEye size={24} className="text-[#E4E4E7]"/>}
                            </div>
                        }
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password}
                    />

                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    textcolor="white"
                    className="w-full cursor-pointer shadow!"
                    rounded="xl"
                >
                    {loading ? (
                        <TbLoader2 size={20} className="animate-spin mx-auto" />
                    ) : (
                        "Login"
                    )}
                </Button>
            </form>
        </div>
    )
}

export default User