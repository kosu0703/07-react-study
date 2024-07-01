"use client"
import { useEffect } from 'react';

export default function Checkout() {
  useEffect(() => {
    const tossPayments = TossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY);

    // 결제 버튼 클릭 시 실행되는 함수
    const handlePayment = async () => {
      try {
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 10000, orderId: 'ORDER_ID' }),
        });

        const { successUrl, failUrl } = await response.json();
        tossPayments.requestPayment('카드', {
          amount: 10000,
          orderId: 'ORDER_ID',
          orderName: '테스트 결제',
          successUrl,
          failUrl,
        });
      } catch (error) {
        console.error(error);
      }
    };

    document.getElementById('payment-button').addEventListener('click', handlePayment);
  }, []);

  return (
    <div>
      <h1>결제 페이지</h1>
      <button id="payment-button">결제하기</button>
    </div>
  );
}
