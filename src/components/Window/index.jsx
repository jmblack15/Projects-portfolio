const Window = ({ children }) => {
  return (
    <section>
      <div className='window_bar'>
        {/* <img src="" alt="" /> */}
        <div>
          <div>-</div>
          <div>4</div>
          <div>X</div>
        </div>
      </div>
      {children}
    </section>
  )
}

export { Window }
