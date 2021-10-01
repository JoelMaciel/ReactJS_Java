export const formatPrice = (price: number) => {
  const params = { maximumFractionDigits: 2, mminimumFractionDigits: 2, 
    style: 'currency',
    currency: 'BRL',
 };
  return new Intl.NumberFormat('pt-BR', params).format(price);
};
