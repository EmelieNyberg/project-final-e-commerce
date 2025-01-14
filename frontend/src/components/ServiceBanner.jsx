import { TbTruckDelivery } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import styled from "styled-components";

const StyledServiceBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: #edd8ff;

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
  padding: 10px;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }

  svg {
    font-size: 2rem;
    color: #a066ff;
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
