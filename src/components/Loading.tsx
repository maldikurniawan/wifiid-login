import { BeatLoader } from "react-spinners";

interface LoadingProps {
    size?: number;
    loading?: boolean;
    color?: "primary" | "base" | "success" | "warning" | "danger" | "info" | string;
}

const Loading = ({ size = 20, loading = false, color = "primary" }: LoadingProps) => {

    const loadColors: Record<string, string> = {
        primary: "#DB2777",
        base: "#F3F4F6",
        success: "#16A34A",
        warning: "#FACC15",
        danger: "#DC2626",
        info: "#2563EB",
    };

    const loadColor = loadColors[color] || color;

    return (
        <div className="flex justify-center items-center">
            <BeatLoader color={loadColor} loading={loading} size={size} />
        </div>
    );
};

export default Loading;
