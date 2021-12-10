const Pagination = ({couponsPerPage, totalCoupons, currentPage, paginate}) => {
  const couponNumbers = []

  for(let i=1; i <= Math.ceil(totalCoupons / couponsPerPage); i++) {
    couponNumbers.push(i)
  }

  return (
    <>
      <ul className="pagination">
        {
          couponNumbers.map(number => (
            <li key={number}>
              <a className={number == currentPage ? "active" : ""} onClick={ () => paginate(number) }>
                {number}
              </a>
            </li>
          ))
        }
          </ul>
    </>
  )
}

export default Pagination;