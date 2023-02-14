export const FormSubmit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return {
    handleSubmit,
  };
};
