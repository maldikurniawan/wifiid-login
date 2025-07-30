import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="flex">
                {/* Label Vertikal */}
                <div className="relative card bg-primary rounded-tl-xl rounded-bl-xl shadow-md p-4 h-[165px] w-[50px] flex justify-center items-center">
                    <span
                        className="text-white text-xl font-semibold rotate-180"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                        Voucher
                    </span>
                </div>

                {/* Isi Voucher */}
                <div className="bg-white p-4 rounded-tr-xl rounded-br-xl shadow-md border-t border-gray-100 w-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-2">Paket Super Hemat</h3>
                        <p className="text-gray-600">Durasi <span className="font-medium">6 jam</span></p>
                        <p className="text-gray-600">Kecepatan <span className="font-medium">10 Mbps</span></p>
                    </div>
                    <div className="pt-2 border-t border-dashed border-gray-400">
                        <p className="text-xl font-bold text-primary">Rp 5.000</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
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

export default Card;
