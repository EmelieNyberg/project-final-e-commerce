import { TbTruckDelivery } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import styled from "styled-components";

const StyledServiceBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.Font1};

  h3 {
    font-family: ${({ theme }) => theme.fonts.Font1};
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.Font2};
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.Font1};
    margin: 0;
  }

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.Btn1};
  }
`;

export const ServiceBanner = () => {
  return (
    <StyledServiceBanner>
      <StyledServiceInfo>
        <TbTruckDelivery />
        <h3>Free Delivery</h3>
        <p>Orders From All Over</p>
      </StyledServiceInfo>
      <StyledServiceInfo>
        <FaPhoneAlt />
        <h3>24/7 Support</h3>
        <p>Dedicated Support</p>
      </StyledServiceInfo>
      <StyledServiceInfo>
        <MdOutlinePayment />
        <h3>Secure Payment</h3>
        <p>100% Secure Support</p>
      </StyledServiceInfo>
      <StyledServiceInfo>
        <TbTruckReturn />
        <h3>90 Days Return</h3>
        <p>Email Us</p>
      </StyledServiceInfo>
    </StyledServiceBanner>
  );
};
