export const user_registration = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
        "user_id",
        "user_email",
        "user_first_name",
        "user_last_name",
        "user_password",
        "user_company",
      ],
      data: [
        {
          user_id: "654321",
          user_email: "andredublin2020@gmail.com",
          user_first_name: "Andre Felipe",
          user_last_name: "Leal",
          user_password: "123456",
        },
        {
          user_id: "123456",
          user_email: "franciscorvc11@gmail.com",
          user_first_name: "Francisco",
          user_last_name: "Campos",
          user_password: "123456",
        },
        
      ],
    });
  }, 2000);
});
export const Menu = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
        "service_id",
        "service_name",
        "description",
        "duration",
        "price",
        "Currency"
      ],
      data: {
        service_id :"131313",
        service_name : "Corte M",
        description : "Corte Masculino",
        duration : "20 min",
        price :"10"
      },
      {
        service_id :"23232",
        service_name : "Corte plus",
        description : "Corte Masculino + sobrancelhas + barba ",
        duration : "28 min",
        price :"13"
      }
      {
        service_id :"511515",
        service_name : "barba",
        description : "Corte barba + sobrancelhas",
        duration : "10 min",
        price :"6"
      }
    });
  }, 2000);
});

export const transaction = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
     "paymentID",
     "user_id",
     "appointment_id",
     "amount",
     "payment_method",
     "timestamp"
      ],
      data: {
        paymentID :"1313131",
        user_id : "13213123",
        appointment_id :"41415777",
        amount : "13",
        payment_method : "Mbway",
        timestamp : "28"
      },
    });
  }, 2000);
});

export const Appointment = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
        "appointment_id",
        "user_id",
        "date",
        "time",
        "service",
        "status"
      ],
      data: {
      appointment_id : "131455",
      user_id :"4155",
      date : "10/10",
      time :"16:30",
      status: "confirmado!"
      },
    });
  }, 2000);
});

