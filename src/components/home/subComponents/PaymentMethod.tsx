export default function PaymentMethod({ paymentImage }: any) {
  return (
    <button type="button" className="paymentMethod">
      <img src={paymentImage} alt="" />
    </button>
  );
}
