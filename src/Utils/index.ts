import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatMoney = (money: number) => {
  const moneyNumber = Math.round(money * 100) / 100;

  return new Intl.NumberFormat('en-IN').format(moneyNumber);
};
