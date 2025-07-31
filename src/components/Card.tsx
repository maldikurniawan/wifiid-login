import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="w-full rounded-xl overflow-hidden bg-white border border-gray-100 drop-shadow-xs p-8">
            <div className="relative">{children}</div>
        </div>
    )
}

export default Card