import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutOrder } from "../../services/api";
import { clearCart, closeCart, removeItem } from "../../store/cartSlice";
import * as S from "./styles";

const initialDeliveryState = {
  receiver: "",
  address: "",
  city: "",
  zipCode: "",
  number: "",
  complement: ""
};

const initialPaymentState = {
  name: "",
  number: "",
  code: "",
  expiresMonth: "",
  expiresYear: ""
};

export default function Cart() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);
  const [step, setStep] = useState("cart");
  const [delivery, setDelivery] = useState(initialDeliveryState);
  const [payment, setPayment] = useState(initialPaymentState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [order, setOrder] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const total = items.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (!isOpen) {
      setStep("cart");
      setOrder(null);
      setSubmitError("");
      setDelivery(initialDeliveryState);
      setPayment(initialPaymentState);
    }
  }, [isOpen]);

  const handleDeliveryChange = (field) => (event) => {
    setDelivery((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handlePaymentChange = (field) => (event) => {
    setPayment((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmitDelivery = (event) => {
    event.preventDefault();
    setStep("payment");
  };

  const handleSubmitPayment = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const payload = {
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.address,
            city: delivery.city,
            zipCode: delivery.zipCode,
            number: delivery.number,
            complement: delivery.complement
          }
        },
        payment: {
          card: {
            name: payment.name,
            number: payment.number,
            code: payment.code,
            expires: {
              month: payment.expiresMonth,
              year: payment.expiresYear
            }
          }
        }
      };

      const response = await checkoutOrder(payload);
      setOrder(response);
      setStep("confirmation");
    } catch (error) {
      setSubmitError(error.message || "Nao foi possivel finalizar o pedido.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinishOrder = () => {
    dispatch(clearCart());
    dispatch(closeCart());
    setStep("cart");
    setOrder(null);
    setDelivery(initialDeliveryState);
    setPayment(initialPaymentState);
  };

  const orderId =
    order?.orderId || order?.id || order?.pedidoId || order?.order_id || "";

  if (!isOpen) {
    return null;
  }

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.Sidebar onClick={(event) => event.stopPropagation()}>
        {step === "cart" && (
          <>
            {items.length === 0 ? (
              <S.Empty>Seu carrinho esta vazio.</S.Empty>
            ) : (
              <S.Items>
                {items.map((item) => (
                  <S.Item key={item.cartId}>
                    <S.ItemImage src={item.image} alt={item.name} />
                    <S.ItemInfo>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>
                    </S.ItemInfo>
                    <S.RemoveButton
                      type="button"
                      onClick={() => dispatch(removeItem(item.cartId))}
                      aria-label={`Remover ${item.name} do carrinho`}
                    >
                      <S.TrashIcon viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M135.2 17.7C140.1 7.4 150.7 0 162 0h124c11.3 0 21.9 7.4 26.8 17.7L328 32h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8l-20.3 347.7c-1.8 30.8-27.2 55.3-58 55.3H118.3c-30.8 0-56.2-24.5-58-55.3L40 80h-8C18.7 80 8 69.3 8 56S18.7 32 32 32h88l15.2-14.3zM176 32l-7.2 8h110.4l-7.2-8H176zM120.8 432h206.4c5.5 0 10.1-4.4 10.4-9.9L356.4 80H91.6l18.8 342.1c0.3 5.5 4.9 9.9 10.4 9.9z" />
                      </S.TrashIcon>
                    </S.RemoveButton>
                  </S.Item>
                ))}
              </S.Items>
            )}

            <S.TotalRow>
              <span>Valor total</span>
              <span>R$ {total.toFixed(2)}</span>
            </S.TotalRow>
            <S.CheckoutButton
              type="button"
              disabled={items.length === 0}
              onClick={() => setStep("delivery")}
            >
              Continuar com a entrega
            </S.CheckoutButton>
          </>
        )}

        {step === "delivery" && (
          <>
            <S.SectionTitle>Entrega</S.SectionTitle>
            <S.Form onSubmit={handleSubmitDelivery}>
              <S.Field>
                <S.Label htmlFor="delivery-receiver">Quem ira receber</S.Label>
                <S.Input
                  id="delivery-receiver"
                  value={delivery.receiver}
                  onChange={handleDeliveryChange("receiver")}
                  required
                />
              </S.Field>
              <S.Field>
                <S.Label htmlFor="delivery-address">Endereco</S.Label>
                <S.Input
                  id="delivery-address"
                  value={delivery.address}
                  onChange={handleDeliveryChange("address")}
                  required
                />
              </S.Field>
              <S.Field>
                <S.Label htmlFor="delivery-city">Cidade</S.Label>
                <S.Input
                  id="delivery-city"
                  value={delivery.city}
                  onChange={handleDeliveryChange("city")}
                  required
                />
              </S.Field>
              <S.Row>
                <S.Field>
                  <S.Label htmlFor="delivery-zip">CEP</S.Label>
                  <S.Input
                    id="delivery-zip"
                    value={delivery.zipCode}
                    onChange={handleDeliveryChange("zipCode")}
                    required
                  />
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="delivery-number">Numero</S.Label>
                  <S.Input
                    id="delivery-number"
                    value={delivery.number}
                    onChange={handleDeliveryChange("number")}
                    required
                  />
                </S.Field>
              </S.Row>
              <S.Field>
                <S.Label htmlFor="delivery-complement">
                  Complemento (opcional)
                </S.Label>
                <S.Input
                  id="delivery-complement"
                  value={delivery.complement}
                  onChange={handleDeliveryChange("complement")}
                />
              </S.Field>
              <S.ButtonStack>
                <S.CheckoutButton type="submit">
                  Continuar com o pagamento
                </S.CheckoutButton>
                <S.SecondaryButton
                  type="button"
                  onClick={() => setStep("cart")}
                >
                  Voltar para o carrinho
                </S.SecondaryButton>
              </S.ButtonStack>
            </S.Form>
          </>
        )}

        {step === "payment" && (
          <>
            <S.SectionTitle>
              Pagamento - Valor a pagar R$ {total.toFixed(2)}
            </S.SectionTitle>
            <S.Form onSubmit={handleSubmitPayment}>
              <S.Field>
                <S.Label htmlFor="payment-name">Nome no cartao</S.Label>
                <S.Input
                  id="payment-name"
                  value={payment.name}
                  onChange={handlePaymentChange("name")}
                  required
                />
              </S.Field>
              <S.Row>
                <S.Field>
                  <S.Label htmlFor="payment-number">Numero do cartao</S.Label>
                  <S.Input
                    id="payment-number"
                    value={payment.number}
                    onChange={handlePaymentChange("number")}
                    required
                  />
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="payment-code">CVV</S.Label>
                  <S.Input
                    id="payment-code"
                    value={payment.code}
                    onChange={handlePaymentChange("code")}
                    required
                  />
                </S.Field>
              </S.Row>
              <S.Row>
                <S.Field>
                  <S.Label htmlFor="payment-month">Mes de vencimento</S.Label>
                  <S.Input
                    id="payment-month"
                    value={payment.expiresMonth}
                    onChange={handlePaymentChange("expiresMonth")}
                    required
                  />
                </S.Field>
                <S.Field>
                  <S.Label htmlFor="payment-year">Ano de vencimento</S.Label>
                  <S.Input
                    id="payment-year"
                    value={payment.expiresYear}
                    onChange={handlePaymentChange("expiresYear")}
                    required
                  />
                </S.Field>
              </S.Row>
              {submitError ? <S.ErrorText>{submitError}</S.ErrorText> : null}
              <S.ButtonStack>
                <S.CheckoutButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Finalizando..." : "Finalizar pagamento"}
                </S.CheckoutButton>
                <S.SecondaryButton
                  type="button"
                  onClick={() => setStep("delivery")}
                >
                  Voltar para a edicao de endereco
                </S.SecondaryButton>
              </S.ButtonStack>
            </S.Form>
          </>
        )}

        {step === "confirmation" && (
          <>
            <S.SectionTitle>
              Pedido realizado{orderId ? ` - ${orderId}` : ""}
            </S.SectionTitle>
            <S.InfoText>
              Estamos felizes em informar que seu pedido ja esta em processo de
              preparação e, em breve, sera entregue no endereço fornecido.
            </S.InfoText>
            <S.InfoText>
              Gostariamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.InfoText>
            <S.InfoText>
              Lembre-se da importância de higienizar as maos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.InfoText>
            <S.InfoText>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.InfoText>
            <S.CheckoutButton type="button" onClick={handleFinishOrder}>
              Concluir
            </S.CheckoutButton>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  );
}
