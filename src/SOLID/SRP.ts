// Single Responsibility Principle (SRP) - A classe deveria ter apenas uma responsabilidade.

class CalculateOrderDiscount {
  public execute() {
    // Lógica para calcular o desconto do pedido
  }
}

class SubmitOrder {
  public execute() {
    // Lógica para emitir a nota
  }
}

class CreateOrder{
  public execute(){
    const calculateOrderDiscount = new CalculateOrderDiscount();
    calculateOrderDiscount.execute();

    const submitOrder = new SubmitOrder();
    submitOrder.execute();
  }
}