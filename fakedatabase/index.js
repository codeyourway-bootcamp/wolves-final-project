export const user_registration = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
        "user_id",
        "user_email",
        "user_first_name",
        "user_last_name",
        "user_password",
        "user_currency",
      ],
      data: [
        {
          user_id: "123456",
          user_email: "franciscorvc11@gmail.com",
          user_first_name: "Francisco",
          user_last_name: "Campos",
          user_password: "123456",
          user_currency: "Eur",
        },
      ],
    });
  }, 2000);
});

