interface PriceProps {
  price: number;
  maxQuantity: number;
  fees: number;
  productPrice: number;
  quantity: number;
  handleQuantityChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Price = ({ price, quantity, maxQuantity, fees, productPrice, handleQuantityChange }: PriceProps) => {
  return (
    <div>
      <h2>수량 선택</h2>
      <div>
        가격: {price.toLocaleString()}원<br />
        수량:{' '}
        <input
          type='number'
          min='1'
          max={maxQuantity}
          value={quantity}
          onChange={handleQuantityChange}/>
        (배송비는 5개당 {fees.toLocaleString()}원씩 추가됩니다.)
        <br />
        상품 금액: {productPrice.toLocaleString()}원
      </div>
    </div>
  );
};

export default Price;
