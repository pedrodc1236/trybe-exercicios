//Para os exercícios a seguir, use o seguinte código.

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  // 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const customerInfo = (order) => {
    const orderDeliveryPerson = order.order.delivery.deliveryPerson;
    const orderName = order.name;
    const orderPhone = order.phoneNumber;
    const orderStreet = order.address.street;
    const orderNumber = order.address.number;
    const orderApartment = order.address.apartment;
    
    const info = `Olá ${orderDeliveryPerson}, entrega para: ${orderName}, Telefone: ${orderPhone}, R. ${orderStreet}, Nº: ${orderNumber}, AP: ${orderApartment}.`

    console.log(info)
  }  

  // 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  // customerInfo(order);
  
  const orderModifier = (order) => {
    const orderNewName = order.name = 'Luiz Silva';
    const orderPizza = Object.keys(order.order.pizza);
    const orderDrink = order.order.drinks.coke.type;
    const orderPagament = order.payment.total = '50';

    const info = `Olá ${orderNewName}, o total do seu pedido de ${orderPizza[0]}, ${orderPizza[1]} e ${orderDrink} é R$${orderPagament},00.`

    console.log(info)  
  }
  
  orderModifier(order);