import { BeatLoader } from "react-spinners";

interface LoadingProps {
    size?: number;
    loading?: boolean;
    color?: "primary" | "base" | "success" | "warning" | "danger" | "info" | string;
}

const Loading = ({ size = 20, loading = false, color = "primary" }: LoadingProps) => {

    const loadColors: Record<string, string> = {
        primary: "#3D74B6",
        base: "#F3F4F6",
        success: "#16A34A",
        warning: "#FACC15",
        danger: "#DC2626",
        info: "#3D74B6",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
