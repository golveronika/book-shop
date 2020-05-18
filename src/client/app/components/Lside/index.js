import React, {useRef} from 'react'

const Lside = ({ groups, handleFilterCategory, exchange }) => {

    const checkboxContainer = useRef(null);

  const handleOnCheck = (event) => {

    const { value, checked } = event.target

    if (value === 'all' && checked) {
        checkboxContainer.current.querySelectorAll("input:not(.custom-checkbox-all)").forEach(el => {
            el.checked = false
        })
    } else if (value !== 'all' && checked){
        checkboxContainer.current.querySelector("input.custom-checkbox-all").checked = false
    }

    handleFilterCategory(event)

  }

  return (
    <aside className="section-left">
        <div className="container">
            <div className="excanche">
                <span className="excanche__text">{`1$ = ${exchange.cost}₽`}</span>
                {exchange.rise ? (
                    <div className="excanche__triangle-up"></div>
                ) : (
                    <div className="excanche__triangle-down"></div>
                )}
            </div>

            <div className="filter">

                <span className="filter__title">Категории</span>

                <div className="filter__params" ref={checkboxContainer}>
                    <label className="custom-checkbox">
                        <input className="custom-checkbox-all" type="checkbox" value="all" defaultChecked onChange={handleOnCheck} />
                        <span>Все</span>
                    </label>

                    {groups.map((item, index) => (
                        <label className="custom-checkbox" key={`cat-${index}`}>
                            <input type="checkbox" value={item} onChange={handleOnCheck} />
                            <span>{item}</span>
                        </label>                        
                    ))}
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Lside;
