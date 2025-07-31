import { TbClock, TbWifi } from 'react-icons/tb';
import styled from 'styled-components';
import Button from './Button';

type VoucherCardProps = {
    key?: any;
    label?: string;
    labelColor?: string;
    title: string;
    duration: string;
    speed: string;
    price: any;
    buy?: boolean;
};

const VoucherCard: React.FC<VoucherCardProps> = ({
    key,
    label,
    labelColor = "bg-primary",
    title,
    duration,
    speed,
    price,
    buy = true,
}) => {
    return (
        <StyledWrapper>
            <div className="flex rounded-xl overflow-hidden drop-shadow-xs hover:drop-shadow-sm cursor-pointer duration-300 hover:-translate-y-1 ease-in-out h-40" key={key}>
                {/* Vertical Label */}
                <div
                    className={`relative blank-dots ${labelColor} shadow p-4 h-[165px] w-[50px] flex justify-center items-center`}
                >
                    <span
                        className="text-white text-xl font-semibold rotate-180 leading-0 flex items-center justify-center ml-1.5"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                        {label}
                    </span>
                </div>

                {/* Voucher Content */}
                <div className="bg-white p-4 border rounded-r-xl border-gray-100 w-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
                        <p className="text-gray-600 flex gap-1 items-center text-sm">
                            <TbClock />
                            <div>
                                Durasi <span className="font-medium">{duration}</span>
                            </div>
                        </p>
                        <p className="text-gray-600 flex gap-1 items-center text-sm">
                            <TbWifi />
                            <div>
                                Kecepatan <span className="font-medium">{speed}</span>
                            </div>
                        </p>
                    </div>
                    <hr className='border-dashed border-gray-400 my-2' />
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-primary">
                            {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(price)}
                        </p>
                        {buy && (
                            <Button rounded='lg' size="sm" textcolor='white' className='cursor-pointer shadow!'>Beli</Button>
                        )}
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .blank-dots {
    -webkit-mask: 
      radial-gradient(circle 10px at 0% 20%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 40%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 60%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 80%, transparent 99%, black 100%);
    mask: 
      radial-gradient(circle 10px at 0% 20%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 40%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 60%, transparent 99%, black 100%),
      radial-gradient(circle 10px at 0% 80%, transparent 99%, black 100%);
    -webkit-mask-composite: intersect;
    mask-composite: intersect;
  }`;

export default VoucherCard;
