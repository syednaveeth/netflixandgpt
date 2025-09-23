export const Validate = (email, password, username) => {
  const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=\S+$).{8,}$/.test(
    password
  );

  const userNameValidate = /^[a-zA-Z0-9]{3,16}$/.test(username);

  if (!emailValidate) return "email is not valid";

  if (!passwordValidate) return "password is not valid";

  if (!userNameValidate) return "username is not valid";

  return null;
};
