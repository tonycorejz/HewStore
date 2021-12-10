const CreateCouponBtn = ({children, ...props}) => {

  return (
    <button {...props} >
      {children}
    </button>
  );
}

export default CreateCouponBtn;