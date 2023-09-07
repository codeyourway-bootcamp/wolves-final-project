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

