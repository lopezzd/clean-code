// Open/Close Principle (OCP) - A classe deveria estar aberta para extensão, mas fechada para modificação.

interface PaymentMethodInterface {
  getDiscountAmount(amount: number): number;
}

class Credit implements PaymentMethodInterface {
  private installments: number;

  constructor(installments: number) {
    this.installments = installments;
  }

  getDiscountAmount(amount: number): number {
    if (this.installments === 1) {
      return amount * 0.05;
    }

    if (this.installments <= 6) {
      return amount * 0.02;
    }
    return 0;
  }
}

class Debit implements PaymentMethodInterface {
  getDiscountAmount(amount: number): number {
    return 0;
  }
}

class Pix implements PaymentMethodInterface {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Billet implements PaymentMethodInterface {
  getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class CalculateOrderDiscount {
  private paymentMethod: PaymentMethodInterface;

  constructor(paymentMethod: PaymentMethodInterface) {
    this.paymentMethod = paymentMethod;
  }

  public execute(amount: number, paymentMethod: PaymentMethodInterface) {
    return this.paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount(
   new Credit(1)
);

calculateOrderDiscount.execute(100);
